import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlayerPersonalData } from '../../components/stats/playerPersonalData';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private playerData: PlayerPersonalData | null = null;

  setPlayerData(data: PlayerPersonalData | null) {
    this.playerData = data
  }

  get getPlayerData(): PlayerPersonalData | null {
    return this.playerData;
  }
}
