import { CanDeactivate } from '@angular/router';
import { Injectable} from '@angular/core';

export interface CanComponentDeactivate
{
  canLeave : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(component:CanComponentDeactivate)
  {
    if(component.canLeave == true)
    {
      return true
    }
    else
    {
      return confirm("Do you want to discard Changes?")
    }
  }
}
