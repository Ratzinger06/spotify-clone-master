import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) { }

  // Ejemplo de función para obtener los nuevos lanzamientos
  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + 'BQBMYhHaP8bhJEWlxME-x_TWbnTLaRTjgKuXo5uobCyR4PHWBOhwBrqYmNO9k7C8nMrwf8zI2FIRtM7MM-w1i_CS4iKRHymXH79qPlu6R91LCz3lcz2322I_OLyr_0by14eR4ZRweAV35iJBTgRWWUt7vVBfOtuHOuhOPYwaKYlXI7zP4FEKJowPloVF6nqDcnp3Yt4VcvH5XofI-zo85ve-Vfr1nEzusQwmaFFM7J6R27miBSwZ_nR9K5zDOkLoYVDreuEsoqowXq2YZX8iFHb2R88f'
    });

    return this.http.get(`${this.apiUrl}/browse/new-releases`, { headers });
  }
}
