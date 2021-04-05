import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

//axios,fetch kütüphane
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  getCategories: any; // bir an backend emetod ile düzelteceğiz sandım..ok frontende yazdığın burayı ilgilendirir yani burada tanımladığın componen.Ts dosyasında burayı ilgillendirir html dediğim 
 
  constructor(private productService:ProductService,
   private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
//hatanın nerden olduğunu gördünmü tam anlayamadım backend?
//bak product service getProductsByCategory diye eklememişşin frontoki product service bu 
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
}