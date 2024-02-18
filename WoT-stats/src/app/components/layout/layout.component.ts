import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../service/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  accessToken: string = '';

  constructor(private authService: AuthService,   private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.accessToken = params['access_token'];
      console.log(this.accessToken);
    });
  }

  login() {
    this.authService.auth().subscribe(
      (response) => {
        const redirectUrl = response.data.location;
        window.location.href = redirectUrl;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}