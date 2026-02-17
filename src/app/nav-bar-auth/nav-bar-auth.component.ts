import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  ],
  templateUrl: './nav-bar-auth.component.html',
  styleUrl: './nav-bar-auth.component.scss',
})
export class NavBarAuthComponent {
  private router=inject(Router)
  items: MenuItem[] | undefined;
  routerpath: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
{
        label: 'cart',
        icon: 'pi pi-cart-plus',
        path: 'cart',
      },{
        label: 'Login',
        icon: 'pi pi-sign-in',
        path: 'login',
      },
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        path: 'Register',
      },
      
    ];
    this.routerpath = [
      {
        label: 'home',
        icon: 'pi pi-home',
        path: 'home',
      },  {
        label: 'product',
        icon: 'pi pi-th-large',
        path: 'product',
      },   
    ];
  }
  logout(){
    localStorage.removeItem('usertoken')
    this.router.navigate(['login'])
  }
}
