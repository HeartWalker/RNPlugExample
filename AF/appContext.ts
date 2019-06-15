import { Container } from 'inversify';
import { Util } from './util';

export class AppContext {
  private readonly rootContainer: Container;
  private readonly _Util: Util;
  constructor(rootContainer: Container) {
    this.rootContainer = rootContainer;
    this._Util = this.rootContainer.get<Util>('Util');
  }

  public get Util() {
    return this._Util;
  }
}