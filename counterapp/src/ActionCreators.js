import { ADD , SUB  } from "./Actions";

 
export const Add = (number = 1) => {
     return  {
           type : ADD,
           payload : number
     }
}

export const Sub = (number = 1) => {
       return {
             type : SUB,
             payload : number
       }
}
