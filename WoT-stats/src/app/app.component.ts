import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StatsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}