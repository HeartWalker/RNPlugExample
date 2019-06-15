import 'reflect-metadata';

export const InvalidModuleConfigMessage = (property: string) =>
  `Invalid property '${property}' in @Module() decorator.`;

export class InvalidModuleConfigException extends Error {
    constructor(property: string) {
      super(InvalidModuleConfigMessage(property));
    }
  }

export const metadata = {
    IMPORTS: 'imports',
    EXPORTS: 'exports',
    PROVIDERS: 'providers'
  };

export interface IModuleMetadata {
    [keys:string]: any;
    imports?: any[];
    //exports?: any[];
    providers?: any[];
  }
  
const metadataKeys = [
  metadata.IMPORTS,
  metadata.PROVIDERS,
  //metadata.EXPORTS,
];
let a:IModuleMetadata['imports']
const validateKeys = (keys: string[]) => {
  const isKeyValid = (key: any) => metadataKeys.findIndex(k => k === key) < 0;
  const validateKey = (key: any) => {
    if (isKeyValid(key)) {
      throw new InvalidModuleConfigException(key);
    }
  };
  keys.forEach(validateKey);
};

/**
 * Defines the module
 * - `imports` - the set of the 'imported' modules
 * - `providers` - the list of providers that belong to this module. They can be injected between themselves.
 * - `exports` - the set of components, which should be available for modules, which imports this module
 * @param obj {ModuleMetadata} Module metadata
 */
export function DModule(obj:IModuleMetadata): ClassDecorator {
  const propsKeys = Object.keys(obj);
  validateKeys(propsKeys);
  
  return (target: object) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, obj[property], target);
      }
    }
  };
}
