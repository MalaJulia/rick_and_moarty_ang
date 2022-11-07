import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { EpisodeService} from "../../services";
import {IEpisode, IResult} from "../../interfaces";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  episode: any

  constructor( private activatedRoute: ActivatedRoute, private episodeService: EpisodeService) {

    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value)

      const { episode } = value;


        this.episodeService.getById(episode).subscribe(value => {
          console.log(value, 'episode')
          this.episode = value})

    })
  }
  ngOnInit(): void {}

}
