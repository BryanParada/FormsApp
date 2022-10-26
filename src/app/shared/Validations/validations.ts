import { FormControl } from "@angular/forms";


 export const name_lastnamePattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
 export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
 // '([a-zA-Z]+) (.+[a-zA-Z]+).+$'; // para 2 apellidos Te obliga a escribir al menos 2 palabras, pero te permite añadir 3 o más.


 export const cantBeStrider = (control: FormControl) =>{
    const value: string = control.value?.trim().toLowerCase();
    // console.log(value);
    
    if (value === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
    
  }