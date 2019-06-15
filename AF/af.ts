import { Container } from "inversify";
import { AppContainer } from "./appContainer";
export class Af {
    constructor(){

    }   
    public af(module:any){
        return new AppContainer(new Container(), module);
    }

}

export const AF = (new Af()).af;