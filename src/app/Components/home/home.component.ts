import { Iproduct } from './../../iproduct';
import { Component, DestroyRef, Inject, inject, ViewEncapsulation } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ProductsService } from '../../core/Services/products.service';
import { Iproducts } from '../../core/Interfaces/iproducts';
import { MenubarModule } from "primeng/menubar";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, MenubarModule, NgxSpinnerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
   images: any[] | undefined;
   productList:Iproducts[]=[];
  private _productList=inject(ProductsService)
  private _NgxSpinnerService=inject(NgxSpinnerService)
  private router=inject(Router)
    constructor() {}

    ngOnInit() {
      this._NgxSpinnerService.show()
      this._productList.getProductList().pipe(take(1)).subscribe({
        next:(res)=>{
          this.productList=res
          this._NgxSpinnerService.hide()
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
}
