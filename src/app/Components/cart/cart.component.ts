import { IcartMain } from './../../core/Interfaces/icart';
import { take } from 'rxjs';
import { CartServiceService } from './../../core/Services/cart-service.service';
import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../core/Services/auth-service.service';
import { IuserLogedInfo } from '../../core/Interfaces/iauth';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  logedinfo!:number
  // userinfo:string
  private _AuthServiceService=inject(AuthServiceService)
  private _CartServiceService=inject(CartServiceService)
  cartList:IcartMain[]=[]
  
  ngOnInit(): void {
      const userData=(localStorage.getItem('userData'))
      const uData=userData ?JSON.stringify(userData) : null
    this.getlogedinfo();
  this.getCartData();
  }
  getCartData(){
       this._CartServiceService.getCartData(this.logedinfo).pipe(take(1)).subscribe({
      next:(res)=>{
       this.cartList=res.carts
        console.log(res);
      }
    })
  }
  getlogedinfo(){
    this._AuthServiceService.getLogedInfo().subscribe({
      next:(res)=>{
     console.log(res.id);
     this.logedinfo=res.id
      }
    })
  }
}
