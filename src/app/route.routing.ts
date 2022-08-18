import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestServerComponent } from './test-server/test-server.component';
import { Test2Component } from './Test2/Test2.component';

const routes: Routes = [
  { path:"home", component : HomeComponent},
  { path:"test", component : Test2Component},
  {path:"abc", component : Test2Component},
  {path:"testServer", component : TestServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{

}
