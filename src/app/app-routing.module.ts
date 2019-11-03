import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VvendorlistComponent } from './vvendorlist/vvendorlist.component';
import { CreateVvendorComponent } from './create-vvendor/create-vvendor.component';
import { VvendorEditComponent } from './vvendor-edit/vvendor-edit.component';
import { VvendorDetailsComponent } from './vvendor-details/vvendor-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'vvendorlist', component: VvendorlistComponent },
      { path: 'details/:vdId', component: VvendorDetailsComponent },
      { path: 'updatevendor/:vdId', component: VvendorEditComponent },
      { path: 'addvvendor', component: CreateVvendorComponent }
    ],canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
