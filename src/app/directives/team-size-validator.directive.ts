import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appTeamSizeValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:TeamSizeValidatorDirective,multi:true}]
})
export class TeamSizeValidatorDirective {

  constructor()
  {
  }

  @Input("appTeamSizeValidator")n : any

  validate(control:AbstractControl):ValidationErrors | any{
    let currentValue = control.value;
    let isValid = currentValue % this.n == 0;

    if(isValid){
      return null;
    }
    else{
      return {divisible:{valid:false}};
    }
  }

}
