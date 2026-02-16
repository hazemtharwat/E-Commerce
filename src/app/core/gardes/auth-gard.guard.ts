import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {
   const router=inject(Router)
  if (localStorage.getItem('usertoken') !== null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false
   
  }
};
