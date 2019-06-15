import { Container } from "inversify";
import { AppContext } from './appContext';
import { Util } from './util';
import { Module } from  './module';

export class AppContainer {
    private readonly applicationContext: AppContext;
    private readonly rootModule: Module;
  
    constructor(rootContainer: Container, rootModule: any) {
      rootContainer.bind<Util>('Util').toConstantValue(new Util());
      this.rootModule = new Module(rootContainer, rootModule);
      this.applicationContext = new AppContext(rootContainer);
    }
  
    public get Context() {
      return this.applicationContext;
    }
  }