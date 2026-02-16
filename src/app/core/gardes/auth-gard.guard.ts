import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {
   const router=inject(Router)
   const usertoken=localStorage.getItem('usertoken')
   if (usertoken == null) {
    router.navigate(['/login']);
    return false
  } else {
    return true;
   
  }
};
