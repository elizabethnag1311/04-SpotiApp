import { Component,} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  artistas: any[] = []
  loading : boolean;

  constructor( private spotify:SpotifyService) {
    this.loading = false;
  }

  buscar( termino: string) {
    console.log(termino);
    if (!termino) {
      this.loading = false
    }else {
      this.loading = true
    }
    
    this.spotify.getArtistas( termino )
    .subscribe( (data:any) => {
      this.artistas = data;
      this.loading  = false;
    })
  };
}
