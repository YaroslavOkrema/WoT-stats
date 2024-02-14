import { Component } from '@angular/core';
import { PlayerPersonalData } from '../stats/playerPersonalData';
import { Observable } from 'rxjs';
import { DataTransferService } from '../../service/dataTransfer/data-transfer.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApiService } from '../../service/search/api.service';

@Component({
  selector: 'app-advanced-stats',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './advanced-stats.component.html',
  styleUrl: './advanced-stats.component.scss'
})
export class AdvancedStatsComponent {
  playerData: object | undefined;

  constructor(private apiService: ApiService, private transferServise: DataTransferService) {
    console.log(this.transferServise.getPlayerData);
  }
}