import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify:SpotifyService) {
    
    this.loading = true
    this.error = false
    this.mensajeError = '';
  }

  ngOnInit(){
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false
    },
    (errorType) => {
    this.loading = false;
    this.error = true;
      console.log(errorType.error.error.message);
    this.mensajeError = errorType.error.error.message
    });
  }

}
