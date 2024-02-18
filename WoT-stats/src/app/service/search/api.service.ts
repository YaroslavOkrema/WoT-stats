import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerId } from '../../interfaces/playerId';
import { PlayerStats } from '../../interfaces/playerStats';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.worldoftanks.eu/wot/account/';
  private appId = '73cdf6c95a1cc69d671569c117b05f69';

  constructor(private http: HttpClient) { }

  getPlayerId(playerName: string): Observable<PlayerId> {
    const url = `${this.apiUrl}list/?application_id=${this.appId}&search=${playerName}`;
    return this.http.get<PlayerId>(url);
  }

  getPlayerStats(accountId: number): Observable<PlayerStats> {
    const url = `${this.apiUrl}info/?application_id=${this.appId}&account_id=${accountId}`;
    return this.http.get<PlayerStats>(url);
  }
}