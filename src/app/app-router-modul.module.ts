import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainlayoutComponent} from "./layout/mainlayout/mainlayout.component";

let routes:Routes = [
  {path:'', component:MainlayoutComponent, children:[
      {path:'episode', loadChildren:() => import('./modules/episode/episode.module').then(value => value.EpisodeModule)}
    ]}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModulModule { }
