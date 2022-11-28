import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor( private spotify:SpotifyService) { }

  ngOnInit(){
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data.albums.items
    });
  }

}
