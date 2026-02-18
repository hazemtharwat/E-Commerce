import { routes } from './../../app.routes';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproducts, IsaleList } from '../../core/Interfaces/iproducts';
import { CLIENT_RENEG_LIMIT } from 'tls';

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
  id!:string|null

  ngOnInit(): void {
    this.id=this.routes.snapshot.paramMap.get('id')
    this.getproductDetail()
    this.getsaleList()
  }
getproductDetail(){
  if(this.id!==null){
    this._productList.getProductdetail(this.id).subscribe({
      next:(res)=>{
        console.log(res,"sale lissssssssst");
        
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
      
  this._productList.saleList(this.id).subscribe({
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
