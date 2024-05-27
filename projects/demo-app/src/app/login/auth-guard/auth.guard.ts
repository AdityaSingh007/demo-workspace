import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isAuthenticated: string = sessionStorage.getItem('isAuthenticated') ?? '';
  if (isAuthenticated.toLocaleLowerCase() === 'true') return true;
  else {
    router.navigate(['/login']);
    return false;
  }
};
