import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {IEpisode, IResult} from "../../interfaces";
import {EpisodeService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {


  episodes: IEpisode[]
  count: number

  @ViewChild(MatPaginator)
  paginator: MatPaginator


  constructor(private activatedRoute:ActivatedRoute, private router:Router, private detectorRef: ChangeDetectorRef){}
  // (private episodeService: EpisodeService) {
  // }
  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.paginator.pageIndex = page - 1
      this.detectorRef.detectChanges()
    })
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams: {page: page.pageIndex + 1}})
      this.detectorRef.detectChanges()
    })
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
   map(value => value['data'] as IResult<IEpisode>)
    ).subscribe((value)=>{
      this.count = value.info.count;
      this.episodes = value.results
      console.log(value)
    })

//     this.episodeService.getAll().subscribe(value => {
//       console.log(value, 'vaallllll')
//       return  this.episodes = value.results})
// console.log(this.episodes)

    //
    // getEpisode(episode: IEpisode) {
    //   this.selectedEpisode = episode
    // }

  }

}
