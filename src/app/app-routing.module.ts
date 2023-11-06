import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";
const routes: Routes = [
  { path: 'login', component: LoginComponent ,  runGuardsAndResolvers: 'always'},
  {path: '', component: SplashScreenComponent, runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
