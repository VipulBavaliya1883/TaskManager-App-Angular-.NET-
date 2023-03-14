import { ClientLocation } from '../models/client-location';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appClientLocationStatusValidator]',
  providers: [{provide:NG_VALIDATORS,useExisting:ClientLocationStatusValidatorDirective,multi:true}]
})
export class ClientLocationStatusValidatorDirective implements Validator{

  constructor()
  {
  }

  validate(control: AbstractControl) : ValidationErrors | null
  {
    let isValid = true;
    if (control.value.ClientLocation == 4 && control.value.Status == "Support")
    {
      isValid = false; //indicates invalid
    }

    if (isValid == true)
    {
      return null; //valid
    }
    else
    {
      return { clientLocationStatus: { valid: false }}; //invalid
    }
  }

}
