import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'https://api.spotify.com/v1/browse/new-releases';
  private token = 'BQBMYhHaP8bhJEWlxME-x_TWbnTLaRTjgKuXo5uobCyR4PHWBOhwBrqYmNO9k7C8nMrwf8zI2FIRtM7MM-w1i_CS4iKRHymXH79qPlu6R91LCz3lcz2322I_OLyr_0by14eR4ZRweAV35iJBTgRWWUt7vVBfOtuHOuhOPYwaKYlXI7zP4FEKJowPloVF6nqDcnp3Yt4VcvH5XofI-zo85ve-Vfr1nEzusQwmaFFM7J6R27miBSwZ_nR9K5zDOkLoYVDreuEsoqowXq2YZX8iFHb2R88f';

  constructor(private http: HttpClient) {}
  getAlbums(): Observable<any> {
    const url = `${this.apiUrl}/browse/new-releases`;
    return this.http.get<any>(url);
  }
  getSongs(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching data from Spotify API:', error);
        return of(null);
      })
    );
  }
}
