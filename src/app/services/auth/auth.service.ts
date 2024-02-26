import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { RegisterDto } from '../../models/register.dto';
import { Observable } from 'rxjs';
// import { Response } from '../../utils/response.interface';
import { Router } from '@angular/router';
import { LoginDto } from '../../models/login.dto';
import { UserDto } from '../../models/user.dto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/aftas/api/auth';
  private httpWithoutInterceptor = new HttpClient(this.handler);

  constructor(
    private http: HttpClient,
    private router: Router,
    private handler: HttpBackend,
    private tokenService: TokenService,
  ){}

  user: UserDto | null = null;


  register(dto: RegisterDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, dto);
  }

  login(dto:LoginDto): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,dto);
  }

  logout(): void {
    this.http.get<any>(`${this.apiUrl}/logout`).subscribe(success=>{
      this.tokenService.removeToken();
      this.router.navigate(['/login']);
    });
  }

  refreshToken(dto:any): Observable<any> {
    return this.httpWithoutInterceptor.post<any>(`${this.apiUrl}/refresh`,dto);
  }

  isAuthenticated(): boolean {
    return this.tokenService.getToken() !== null;
  }

}
