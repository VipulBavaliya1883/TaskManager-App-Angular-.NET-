import { TaskStatusComponent } from './components/task-status/task-status.component';
import { MastersComponent } from './components/masters/masters.component';
import { TaskPrioritiesComponent } from './components/task-priorities/task-priorities.component';
import { ClientLocationsComponent } from './components/client-locations/client-locations.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PagingPipe } from '../pipes/paging.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { NumberToWordsPipe } from '../pipes/number-to-words.pipe';
import { CheckBoxPrinterComponent } from './components/check-box-printer/check-box-printer.component';
import { ProjectComponent } from './components/project/project.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent,
    ProjectComponent,
    CheckBoxPrinterComponent,
    ProjectDetailsComponent,
    CountriesComponent,
    ClientLocationsComponent,
    TaskPrioritiesComponent,
    TaskStatusComponent,
    MastersComponent

  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  exports: [ DashboardComponent,ProjectsComponent, MyProfileComponent, ProjectComponent,CheckBoxPrinterComponent,NumberToWordsPipe,FilterPipe,PagingPipe,ProjectDetailsComponent],
  providers:[DashboardService],
  entryComponents:[CountriesComponent,ClientLocationsComponent,TaskPrioritiesComponent,TaskStatusComponent]
})
export class AdminModule { }
