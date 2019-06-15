/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import name from './app';
import { DModule } from './AF/DModal';
import { TestModule } from './app/test/test.module';
import { ModuleBase } from './AF/moduleBase';
import { AF } from './AF/af';
const Name = require('./app');

@DModule({
    imports:[
        TestModule
    ],
    //bind
    providers:[]
  })
export class Module extends ModuleBase{
  constructor(

  ){
    super();
  }

  onModuleAfterInit(){
    AppRegistry.registerComponent(Name.appName, () => App);
  }
}  


AF(Module);
