import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {IResult} from "../interfaces";
import {urls} from "../../../configs";
import {ICharacter} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IResult<ICharacter>>{
    return  this.httpClient.get<IResult<ICharacter>>(urls.character)
  }

  getOneCharacter(url: string):Observable<ICharacter>{
    return this.httpClient.get<ICharacter>(url)
  }
}

