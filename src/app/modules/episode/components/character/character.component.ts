import {Component, Input, OnInit} from '@angular/core';


import {CharactersService} from "../../services";
import {ICharacter} from "../../interfaces";


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
@Input()
characterLink: string
  character: ICharacter

  constructor( private charactersService: CharactersService) {}

  ngOnInit(): void {


this.charactersService.getOneCharacter(this.characterLink).subscribe(oneCharacter => this.character = oneCharacter )
  }

}
