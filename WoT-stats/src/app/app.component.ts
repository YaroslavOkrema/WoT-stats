import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StatsComponent,
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}