import { Project } from '../models/project';
import { Observable, map } from 'rxjs';
import { ProjectsService } from '../services/projects.service';
import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appProjectIDUniqueValidator]',
  providers: [ { provide: NG_ASYNC_VALIDATORS, useExisting: ProjectIDUniqueValidatorDirective, multi: true }]
})
export class ProjectIDUniqueValidatorDirective {

  constructor(private projectsService : ProjectsService)
  {
  }

  // validate(control: AbstractControl) : Observable<ValidationErrors | null>
  // {
  //   return this.projectsService.getProjectByProjectID(control.value).pipe(map( (existingProject: Project) => {
  //     if (existingProject != null)
  //     {
  //       return { uniqueProjectID: { valid: false }};
  //     }
  //     else
  //     {
  //       return null;
  //     }
  //   }));
  // }
}
