import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductsService } from '../core/Services/products.service';


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
  private _ProductsService=inject(ProductsService)
  private _router=inject(Router)
  items: MenuItem[] | undefined;
  routerpath: MenuItem[] | undefined;
  username:string|null=""
  logoutbtn:boolean= false;
  cartcounter!:number;
  ngOnInit() {
    // this.cartCount()
    if(typeof window!= 'undefined'){
        this.username=localStorage.getItem('username')
    }
    this.items = [
       {
        label: 'cart',
        icon: 'pi pi-shopping-cart',
        path: 'cart',
      }
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
openlogout(){
this.logoutbtn=true
}
closelogout(){
this.logoutbtn=false
}
  logout(){
    localStorage.removeItem('usertoken')
    localStorage.removeItem('username')
    this._router.navigate(['login'])
  }
// cartCount(){
//   this._ProductsService.cartService().subscribe({
//     next:(res)=>{
//    this.cartcounter=res.length
//     }
//   })
// }





}
