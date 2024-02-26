import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  getTokenClaims(): any | null {
    const token = this.getToken();
    if (token) {
      const [,payloadBase64] = token.split('.');
      const payload = JSON.parse(atob(payloadBase64));
      return payload;
    }
    return null;
  }
}
