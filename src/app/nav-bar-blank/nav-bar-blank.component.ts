import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';
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
        label: 'cart',
        icon: 'pi pi-cart-plus',
        path: 'cart',
      },{
        label: 'Register',
        icon: 'pi pi-user-plus',
        path: 'Register',
      },
    ];
    this.routerpath = [
      {
        label: 'home',
        icon: "pi pi-home",
        path: 'home',
      },
       {
        label: 'product',
        icon: 'pi pi-th-large',
        path: 'product',
      }
    ];
  }
}
