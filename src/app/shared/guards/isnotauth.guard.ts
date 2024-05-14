import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

export const isnotauthGuard: CanActivateFn = (route, state) => {
  const _authService : AuthService = inject(AuthService)
  return !_authService.isConnected
};
