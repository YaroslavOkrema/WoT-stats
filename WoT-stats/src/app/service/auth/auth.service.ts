import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.worldoftanks.eu/wot/auth/login/?application_id=';

  constructor(private http: HttpClient) { }

  auth(): Observable<any> {
    const appId = '73cdf6c95a1cc69d671569c117b05f69';
    const redirectUri = window.location.href;

    const params = new HttpParams()
      .set('application_id', appId)
      .set('display', 'popup')
      .set('nofollow', '1')
      .set('redirect_uri', redirectUri)
    
    return this.http.get(this.apiUrl, {params});
  }
}