import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {IEpisode, IResult} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) { }

  getAll(page:number = 1):Observable<IResult<IEpisode>>{
  return  this.httpClient.get<IResult<IEpisode>>(urls.episode, {params:{page}})
  }

  getById(id: number):Observable<IResult<IEpisode>>{
    return this.httpClient.get<IResult<IEpisode>>(`${urls.episode}/${id}`)
  }
}
