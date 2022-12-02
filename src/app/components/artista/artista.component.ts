import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;


  constructor( private rauter  :ActivatedRoute,
               private spotify :SpotifyService) {

    this.rauter.params.subscribe( params => {
    this.getArtista( params ['id'] )
    this.getTopTracks( params [ 'id'])
    })
    this.loading = true
   }

   
   getArtista( id: string) {
    this.spotify.getArtista( id )
        .subscribe( artista => {
         console.log(artista);
    this.artista = artista;
    this.loading = false
        })
   }

   getTopTracks( id: string){
    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        })
   }
}
