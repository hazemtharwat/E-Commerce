import { CartServiceService } from './../../core/Services/cart-service.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private _CartServiceService=inject(CartServiceService)
  
  ngOnInit(): void {
    this._CartServiceService.getCartData().subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
}
