import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IEpisode, IResult} from "../../interfaces";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IResult<IEpisode>> {
  constructor(private episodeService:EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResult<IEpisode>> {
    const page = route.queryParams["page"]
    return this.episodeService.getAll(page);
  }
}
