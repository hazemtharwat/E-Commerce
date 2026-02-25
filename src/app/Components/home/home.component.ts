
import { Component, DestroyRef, Inject, inject, ViewEncapsulation } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ProductsService } from '../../core/Services/products.service';
import { Icart, Iproducts } from '../../core/Interfaces/iproducts';
import { MenubarModule } from "primeng/menubar";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { CartServiceService } from '../../core/Services/cart-service.service';
import { AuthServiceService } from '../../core/Services/auth-service.service';
import { FormsModule } from "@angular/forms";
import { SearchForProductPipe } from '../../core/pipes/search-for-product.pipe';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, MenubarModule, NgxSpinnerModule, FormsModule,SearchForProductPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchForItem:string=""
  logedusrname:string='';
   images: any[] | undefined;
   productList:Iproducts[]=[];
   isItemAdded:boolean=false;
  private _productList=inject(ProductsService)
  private _NgxSpinnerService=inject(NgxSpinnerService)
  private _CartServiceService=inject(CartServiceService)
  private _AuthService=inject(AuthServiceService)
  private router=inject(Router)
    constructor() {}

    ngOnInit() {
      this._NgxSpinnerService.show()
      this._productList.getProductList().pipe(take(1)).subscribe({
        next:(res)=>{
          this.productList=res
          this._NgxSpinnerService.hide()
          this.getuserData()
        },
        error:(err)=>{
          console.log(err)
          this._NgxSpinnerService.hide()
        }
      })
    this.images = [{
    itemImageSrc: '../../../assets/ch 1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
    price: '000',
    id:1001,
},{
    itemImageSrc: '../../../assets/di1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 2',
    price: '000',
    id:1002,
},{
    itemImageSrc: '../../../assets/labtop.jpg',
    alt: 'Description for Image 1',
    title: 'Title 3',
    price: '000',
    id:1003,
},{
    itemImageSrc: '../../../assets/m1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 4',
    price: '000',
    id:1004,
},]
       
    }
    addProductToCart(productData:Icart){
      this._CartServiceService.addToCart(productData).subscribe({
      next:(result)=>{
        return {
          ...result ,  
             isItemAdded:false,
        }
      //  this.productList=result.map((p:Icart)=>{
      //   if(p.id==productData.id){
      //     return{
      //       ...p,
      //  isItemAdded:false,
      //     } 
      //   }
      //   return result
      //   })
      }
      })
    }

      getuserData(){
        this._AuthService.getLogedInfo().subscribe({
          next:(res)=>{
            this.logedusrname=res.username
          }
        })
      }

}
