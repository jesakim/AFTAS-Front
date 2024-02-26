import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../services/auth/token.service';

export const authorityGuard: CanActivateFn = (route, state) => {
  const tokenService: TokenService = inject(TokenService); 
  
  return tokenService.getTokenClaims().authorities.includes(route.data['authority']);
};
