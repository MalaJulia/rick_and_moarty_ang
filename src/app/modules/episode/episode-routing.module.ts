import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeResolver} from "./services/resolver/episode.resolver";
import {CharactersComponent} from "./components/characters/characters.component";

const routes: Routes = [  {
  path: '', resolve:{data:EpisodeResolver}, runGuardsAndResolvers: 'paramsOrQueryParamsChange', component: EpisodesComponent, children: []
},
  {path: 'characters', component:CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
