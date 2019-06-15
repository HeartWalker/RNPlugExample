import { Container } from "inversify";
// import { IEvent } from "../event/event.interface";
// import { EventHandlerMetatype, EventBus, IEventHandler, IEventBus } from "../event";
import * as _ from 'lodash';
import { Util } from "./util";
import { decorateTarget } from "./module";

export class ModuleContext {
  private readonly _childContexts: Set<ModuleContext>;
  private _util!: Util;
  constructor(private name: string, private _container: Container) {
    this._childContexts = new Set<ModuleContext>();
  }
  public get container(): Container {
    return this._container;
  }
  public get Name(): string {
    return this.name;
  }
  public get childContexts(): Set<ModuleContext> {
    return this._childContexts;
  }

  public get util() {
    if(!this.util){
      this._util = this._container.get<Util>('Util')
    }
    return this._util;
  }




  // public registerEventHandler(handlers: EventHandlerMetatype[]) {
  //   let _instances: IEventHandler<IEvent>[] = new Array<IEventHandler<IEvent>>();
  //   handlers.forEach(handler => {
  //     decorateTarget(handler);
  //     const moduleIdentifier = _.uniqueId('eventHandlerIdentifier');
  //     this.container.bind(moduleIdentifier).to(handler).inSingletonScope();
  //     _instances.push(this.container.get(moduleIdentifier));
  //   });
  //   (<any>this.eventBus).register(_instances);
  // }

}