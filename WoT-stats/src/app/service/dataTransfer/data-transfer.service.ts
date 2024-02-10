import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerPersonalData } from '../../components/stats/playerPersonalData';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  playerData$: any;

  setPlayerData(data: PlayerPersonalData | null) {
    this.playerData$ = data
  }

  getPlayerData() {
    return this.playerData$;
  }
}
