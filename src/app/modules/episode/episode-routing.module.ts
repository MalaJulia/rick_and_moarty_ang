import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EpisodeComponent} from "./components/episode/episode.component";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeResolver} from "./services/resolver/episode.resolver";
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";

const routes: Routes = [  {
  path: '', resolve:{data:EpisodeResolver}, runGuardsAndResolvers: 'paramsOrQueryParamsChange', component: EpisodesComponent, children: [
    {path: ':id', component:EpisodeDetailsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
