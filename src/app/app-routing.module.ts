import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
 {
  path: '**',
  pathMatch: 'full',
  redirectTo: 'superheroes'
},{

  path: '',
  pathMatch: 'full',
  redirectTo: 'superheroes'


 },
 {
  path: 'superheroes',
  component: AppComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
