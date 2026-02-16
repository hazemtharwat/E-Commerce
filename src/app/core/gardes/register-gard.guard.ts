import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../../Components/register/register.component';

export const registerGardGuard: CanDeactivateFn<RegisterComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.RegisterForm.dirty){
 const alert= window.confirm('your data will be lose')
 console.log('your data will be lose');
  return alert
  }if(component.isSubmitted){
    return true;
  }
  return true
};
