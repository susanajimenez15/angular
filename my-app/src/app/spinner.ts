import {ISpinner} from './customer/customer.component'

export function Spinner() {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) =>  {
      const oldFunction:Function = descriptor.value as Function;
      descriptor.value = async function (...args:[]) {
        const spinner = this as ISpinner
        try{
            return await oldFunction.apply(this,args)
        }catch{

        }finally{

        }
      }
    };
  }
