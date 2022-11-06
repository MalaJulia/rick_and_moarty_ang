import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
// import {HeaderComponent} from "../../header/header/header.component";



@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent,
    // HeaderComponent,

  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MatExpansionModule,
    MatPaginatorModule
  ]
})
export class EpisodeModule { }
