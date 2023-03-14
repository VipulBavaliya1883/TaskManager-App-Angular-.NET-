import { RouterModule } from '@angular/router';
import { SortPipe } from '../pipes/sort.pipe';
import { ComponentLoaderDirective } from '../directives/component-loader.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagingPipe } from '../pipes/paging.pipe';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NumberToWordsPipe } from '../pipes/number-to-words.pipe';
import { ProjectIDUniqueValidatorDirective } from '../directives/project-idunique-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../directives/client-location-status-validator.directive';
import { TeamSizeValidatorDirective } from '../directives/team-size-validator.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    NumberToWordsPipe,
    FilterPipe,
    PagingPipe,
    ComponentLoaderDirective,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    TeamSizeValidatorDirective,
    ClientLocationStatusValidatorDirective,
    ProjectIDUniqueValidatorDirective,
    NumberToWordsPipe,
    FilterPipe,
    PagingPipe,
    ComponentLoaderDirective,
    SortPipe
  ]
})
export class SharedModule { }
