import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { PlayerStats } from '../interfaces/playerStats';
import { PlayerId } from '../interfaces/playerId';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlayerPersonalData } from './playerPersonalData';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  playerPersonalData: PlayerPersonalData | null = null;
  playerName = new FormControl('');

  constructor(private apiService: ApiService) {}

  searchPlayer() {
    if(!this.playerName.value) return;

    this.apiService.getPlayerId(this.playerName.value).pipe(
      switchMap((data: PlayerId) => this.apiService.getPlayerStats(data.data[0].account_id || 0)), 
      map((data) => this.getPlayerStats(data))
    )
    .subscribe(
      (data) => {
       this.playerPersonalData = new PlayerPersonalData(data);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPlayerStats(data: PlayerStats): PlayerPersonalData {
    return new PlayerPersonalData(data);
  }
} 