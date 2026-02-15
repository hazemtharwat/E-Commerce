import { Component, } from '@angular/core';
import { NavBarAuthComponent } from '../../nav-bar-auth/nav-bar-auth.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, NavBarAuthComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {
 
}
