import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('spotify listo');
   }

   getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers: any = new HttpHeaders({
      'Authorization': 'Bearer BQARl1PZICoYlN08JgfJacCRvGVQE619jT1ABN1zVqitP-2UNYeJtT-8IS9gmSFQ5lXIAjov0D6AbV1V0OVNZq30F1aWjEQLQjaqrIoVX8fWDV8V3q4'
     });
     return this.http.get(url, { headers });
   }
   
   getNewReleases() {

  //  const headers: any = new HttpHeaders({
  //   'Authorization': 'Bearer BQBqIytaWC5F02hHRXGy_l_9EKfKs9i1mj1QWnLFbaf1oNfLMz2RPSMvJnJXSbe0gK4WnRPC1M-1UuRZOpEUh74axqADOLyE4ZoWmQF_hAQu50YKruo'
  //  });

    return this.getQuery('browse/new-releases')
               .pipe( map( (data: any) => data.albums.items));
    
    // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
              //.pipe( map( (data: any) => data.albums.items));
           
   }

   getArtistas( termino : string) {

    // const headers: any = new HttpHeaders({
    //   'Authorization': 'Bearer BQBqIytaWC5F02hHRXGy_l_9EKfKs9i1mj1QWnLFbaf1oNfLMz2RPSMvJnJXSbe0gK4WnRPC1M-1UuRZOpEUh74axqADOLyE4ZoWmQF_hAQu50YKruo'
    //  });
  
    return this.getQuery(`search?q=${ termino }&type=artist`)
               .pipe( map( (data: any) => data.artists.items ));
    
    
      // this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, {headers})
      //        .pipe( map( (data: any) => data.artists.items ));
   }

   getArtista( id: string) {

    return this.getQuery(`artists/${ id }`);
               //.pipe( map( (data: any) => data.artists.items ));
   }
   getTopTracks( id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
               .pipe( map( (data: any) => data['tracks']));
   }
}


//https://api.spotify.com/v1/artists/{id}