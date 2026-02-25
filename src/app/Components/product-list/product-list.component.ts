import { Iproduct } from '../../oldProduct';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../product-service.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  private router=inject(Router)
  private _ProductService=inject(ProductServiceService)
  searchInput:string="";
  productData!:Iproduct[]


  ngOnInit(): void {

    this._ProductService.getProductData().subscribe(({
      next:(res)=>{
        console.log(res +  "success");
      },
      error:(err)=>{
        console.log(err);
        
      }
    }))
    

  }

  openProducrt(product:Iproduct):void{
    this.router.navigate(['',product.id] )
    
  }

  }

