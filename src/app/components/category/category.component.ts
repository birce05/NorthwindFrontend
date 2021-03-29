import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  [x: string]: any;
  categories:Category[]=[];
  currentCategory: Category={categoryId:0,categoryName:""};
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response: { data: Category[]; }) =>{
      this.categories=response.data 
    })
  }
  setCurrencyCategory(category:Category){
    this.currentCategory=category
  }  
}
