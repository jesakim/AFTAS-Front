import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  role: string | null = null;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.fillRole();
  }

  fillRole(): void {
    this.role = this.tokenService.getTokenClaims()?.role;
  }
  

  logout(): void {
    this.authService.logout();
    this.role = null;
  }

  

}
