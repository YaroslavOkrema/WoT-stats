import { Component } from '@angular/core';
import { PlayerPersonalData } from '../stats/playerPersonalData';
import { Observable } from 'rxjs';
import { DataTransferService } from '../../service/dataTransfer/data-transfer.service';
import { MatToolbarModule } from '@angular/material/toolbar';

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
  playerData$: Observable<PlayerPersonalData | null>;

  constructor(private DataTransferService: DataTransferService) {
    this.playerData$ = this.DataTransferService.getPlayerData();
  }

  ngOnInit() {
    console.log(this.DataTransferService.getPlayerData());
    
  }
}