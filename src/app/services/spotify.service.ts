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
    'Authorization': 'Bearer BQB7BYpQiF5dQegjL2bqmXl_hGhT1yvJPqqTcJ_dfF35ti9MchLANcARci6smxiXCsIPYwPr8Gd-g7FvbXETyZBHEpbaQxCE5P3xOJ3uGQXCCgoXmUY'
   });

   
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
   }

   getArtista( termino : string) {
    const headers: any = new HttpHeaders({
      'Authorization': 'Bearer BQB7BYpQiF5dQegjL2bqmXl_hGhT1yvJPqqTcJ_dfF35ti9MchLANcARci6smxiXCsIPYwPr8Gd-g7FvbXETyZBHEpbaQxCE5P3xOJ3uGQXCCgoXmUY'
     });
  
     
      return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist`, {headers});
   }
}
