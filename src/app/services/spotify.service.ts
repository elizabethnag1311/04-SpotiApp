import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('spotify listo');
   }
   
   getNewReleases() {

   const headers: any = new HttpHeaders({
    'Authorization': 'Bearer BQD611eTw69KUd3nrUDPfqG3dpLW-dEB6sdZz9YOzJvApOXinqZSZ2hZsIfSLwgMxxReuLwSdBX1wT2yPnhQL9DP_hqdXr7JWA57Ontrg_5YjYyYecY'
   });

   
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
   }
}
