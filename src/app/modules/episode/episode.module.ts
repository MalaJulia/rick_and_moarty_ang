import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
    declarations: [
        EpisodesComponent,
        EpisodeComponent,
        CharactersComponent,
        CharacterComponent,


    ],
    exports: [
        EpisodesComponent,
        CharactersComponent
    ],
    imports: [
        CommonModule,
        EpisodeRoutingModule,
        MatExpansionModule,
        MatPaginatorModule
    ]
})
export class EpisodeModule { }
