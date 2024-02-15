import { Routes } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { AdvancedStatsComponent } from './components/advanced-stats/advanced-stats.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'search', pathMatch: 'full'},
            { path: 'search', component: StatsComponent },
            { path: 'advanced-stats', component: AdvancedStatsComponent}
        ]
    },
];