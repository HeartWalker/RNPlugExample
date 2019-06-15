import { inject, injectable } from 'inversify'

@injectable()
export class Presenter {
  private _props: any;

  constructor(...args: any[]){}
  
  public get props() {
    return this._props;
  }

  public set props(value) {
    this._props = value;
  }
}
