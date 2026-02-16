import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-nav-bar-blank',
  standalone: true,
  imports: [
    RouterLink,
    InputTextModule,
    RippleModule,
    ButtonModule,
    ToolbarModule,
    MenubarModule,
    BadgeModule,RouterLinkActive,
  ],
  templateUrl: './nav-bar-blank.component.html',
  styleUrl: './nav-bar-blank.component.scss',
})
export class NavBarBlankComponent {
  items: MenuItem[] | undefined;
  routerpath: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-home',
        path: 'login',
      },
      {
        label: 'Register',
        icon: 'pi pi-star',
        path: 'Register',
      },
    ];
    this.routerpath = [
      {
        label: 'home',
        icon: 'pi pi-star',
        path: 'home',
      },
      {
        label: 'about',
        icon: 'pi pi-star',
        path: 'about',
      },  {
        label: 'product',
        icon: 'pi pi-star',
        path: 'product',
      },  {
        label: 'Dashbord',
        icon: 'pi pi-star',
        path: 'Dashbord',
      },
    ];
  }
}
