import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent  {

  constructor( private rauter  :ActivatedRoute,
               private spotify :SpotifyService) {

    this.rauter.params.subscribe( params => {
    this.getArtista( params ['id'] )
    })
   }

   getArtista( id: string) {
    this.spotify.getArtista( id )
        .subscribe( artista => {
    console.log(artista);
        })
   }
}
