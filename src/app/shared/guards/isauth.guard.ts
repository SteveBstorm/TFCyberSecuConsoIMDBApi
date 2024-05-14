import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { inject } from '@angular/core';

export const isauthGuard: CanActivateFn = (route, state) => {
  const _authService : AuthService = inject(AuthService)
  const _router : Router = inject(Router)
  if(_authService.isConnected) return true;
  _router.navigate(['login'])
  return false
};
