import { ModuleContext } from "./module.context";
import * as _ from 'lodash';
import { Container, decorate, injectable, METADATA_KEY } from "inversify";


export function Rget<T>(metadataKey: string, target: Object): T {
  return Reflect.getMetadata(metadataKey, target) as T;
}

export interface IModuleMetadata {
  imports?: any[];
  //exports?: any[];
  providers?: any[];
}

export class Module {
  private readonly name: string;
  private readonly moduleMeta: IModuleMetadata;
  private readonly container: Container;
  private readonly context: ModuleContext;

  constructor(private parentContainer: Container, private module: any) {
    this.moduleMeta = {
      imports: Rget<any[]>('imports', module),
      providers: Rget<any[]>('providers', module)
    };
    this.name = module.name;
    this.container = parentContainer.createChild();
    this.context = new ModuleContext(this.name, this.container);
    this.loadModule();
  }

  public get Context(): ModuleContext {
    return this.context;
  }

  private loadModule(): void {
    this.moduleMeta.providers && this.moduleMeta.providers.forEach(((provider: { provide: any; useValue: new (...args: any[]) => {}; }) => {
      if (provider.provide && provider.useValue) {
        const serviceIdentifier = provider.provide;
        decorateTarget(provider.useValue)
        this.container.bind(serviceIdentifier).to(provider.useValue).inSingletonScope();
      } else {
        console.warn('miss provider.provide or provider.useValue');
        // decorateTarget(provider)
        // const serviceIdentifier = typeof(provider.provide) === 'string'? provider.provide: provider.provide;
        // this.container.bind(injectionToken<any>(provider)).to(provider).inSingletonScope();
      }
    }));

    decorateTarget(this.module);
    // console.log('################# module', this.module)
    const moduleIdentifier = _.uniqueId('moduleIdentifier');
    // const moduleIdentifier = injectionToken<any>(this.module);
    this.container.bind(moduleIdentifier).to(this.module).inSingletonScope();

    const instance = this.container.get(moduleIdentifier) as any;
    instance.context = this.context;
    instance.initialize && instance.initialize();
    instance.onModuleInit && instance.onModuleInit(this.context);

    this.moduleMeta.imports && this.moduleMeta.imports.forEach(((childModule: any) => {
      // var childModuleToken = injectionToken<any>(childModule);
      var childModuleToken = _.uniqueId('childModuleToken');
      if (this.container.isBound(childModuleToken)) {
        this.context.childContexts.add(this.container.get<Module>(childModuleToken).Context);
      } else {
        this.context.childContexts.add(new Module(this.container, childModule).Context);
      }
    }));

    instance.onModuleAfterInit && instance.onModuleAfterInit(this.context);
  }
}


export function decorateTarget(target: any) {
  if (hasInjectable(target)) {
    return;
  }
  try {
    decorate(injectable(), target);
  } catch (e) {
    throw new Error(
      "Cannot apply @provide decorator multiple times but is has been used " +
      `multiple times in ${target.name} ` +
      "Please use @provide(ID, true) if you are trying to declare multiple bindings!"
    );
  }
}

export function hasInjectable(target: any) {
  return Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target);
}