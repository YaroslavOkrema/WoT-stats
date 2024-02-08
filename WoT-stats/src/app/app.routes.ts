import { Routes } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { AdvancedStatsComponent } from './components/advanced-stats/advanced-stats.component';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full'},
    { path: 'search', component: StatsComponent },
    { path: 'advanced-stats', component: AdvancedStatsComponent}
];