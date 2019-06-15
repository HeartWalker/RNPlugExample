
import { Presenter } from './presenter';
import { interfaces } from 'inversify';
import { ModuleContext } from './module.context';

export const FrameworkConstants = {
    Tokens: {
      NavigationService: 'NavigationService',
      Presenter: 'Presenter',
      PresenterFactory: 'PresenterFactory',
      FactoryPresenter: 'Factory<Presenter>'
    }
  }

export enum Scope {
    Singleton = 'Singleton',
    Transient = 'Transient',
  }

export abstract class ModuleBase  {
  private _context!: ModuleContext;
  constructor() {

    console.log(`${this.constructor.name} is constructing...`);
  }

  public get context(): ModuleContext {
    return this._context;
  }
  public set context(value: ModuleContext) {
    this._context = value;
  }

  public onModuleInit(context: any): void { };
  public onModuleAfterInit(context: any): void {};
  

  public initialize(): void {
    console.log(`${this.constructor.name} is initializing...`);
    this.context.container.bind<interfaces.Factory<Presenter>>(FrameworkConstants.Tokens.FactoryPresenter).toFactory<Presenter>((context) => {
      return (namedOrSymbol: string | string) => (props: any) => {
        let presenter = this.context.container.getNamed<Presenter>(FrameworkConstants.Tokens.Presenter, namedOrSymbol);
        presenter.props = props;
        return presenter;
      };
    });
  }

  public registerPresenter(presenter: { new(...args: any[]): any; new(...args: any[]): any; }, token: string, scope?: Scope) {
    let _scope: Scope = scope === undefined || scope === Scope.Singleton ? Scope.Singleton : Scope.Transient;
    if (_scope == Scope.Transient) {
      this.context.container.bind<Presenter>(FrameworkConstants.Tokens.Presenter).to(presenter).inTransientScope().whenTargetNamed(token);
    } else {
      this.context.container.bind<Presenter>(FrameworkConstants.Tokens.Presenter).to(presenter).inSingletonScope().whenTargetNamed(token);
    }
  }
} 