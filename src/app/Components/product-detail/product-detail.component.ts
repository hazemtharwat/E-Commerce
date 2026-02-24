import { routes } from './../../app.routes';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproducts, IsaleList } from '../../core/Interfaces/iproducts';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  private _productList=inject(ProductsService)
  private routes=inject(ActivatedRoute)
 productList:any
  saleLst:any;
  id:string|null=""

  ngOnInit(): void {
    this.routes.paramMap.subscribe({
      next:(res)=>{
         this.id=res.get('id')
      }
    })
    this.getproductDetail()
    this.getsaleList()
  }
getproductDetail(){
  if(this.id!==null){
    this._productList.getProductdetail(this.id).pipe(take(1)).
    subscribe({
      next:(res)=>{
        // console.log(res,"sale lissssssssst");
        
       this.productList=res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
getsaleList(){
    if(this.id!==null){
      
  this._productList.saleList(this.id).pipe(take(1)).subscribe({
    next:(res)=>{
       this.saleLst=res.find(el=>(el.id == Number(this.id))
       )
       
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}

}
