import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonSevices } from 'src/app/services/pokemon-sevices.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = {
    id:0,
    name:'',
    sprites:{
      front_default:''
    },
    types:[]
  }

  constructor(
    private service:PokemonSevices
  ) { }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }
  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe({
      next:(res) => {
        this.pokemon={
          id:res.id,
          name:res.name,
          sprites:res.sprites,
          types:res.types
        }
      }
    })
  }
}
