import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-bar-auth',
  standalone: true,
  imports: [
    AvatarModule,
    ButtonModule,
    ToolbarModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    RouterLinkActive,
  ],
  templateUrl: './nav-bar-auth.component.html',
  styleUrl: './nav-bar-auth.component.scss',
})
export class NavBarAuthComponent {
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
