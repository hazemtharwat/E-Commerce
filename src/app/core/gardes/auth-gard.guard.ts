import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {
   const router=inject(Router)
   if(typeof window!=='undefined'){
     const usertoken=localStorage.getItem('usertoken')

     if (usertoken == null) {
      router.navigate(['/login']);
      return false
    } else {
      return true;
     
    }
   }
   return true
};
