import { CanDeactivateGuardService } from './guards/can-deactivate-guard.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/components/about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { linkIndex: 2 } },
  { path: "signup", component: SignUpComponent, canDeactivate: [CanDeactivateGuardService], data: { linkIndex: 3 } },

  { path: "about", component: AboutComponent, data: { linkIndex: 1 } },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) },
  { path: "employee", loadChildren: () => import("./employee/employee.module").then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true,enableTracing : false, preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
