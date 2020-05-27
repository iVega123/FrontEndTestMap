import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  category: any;
  currentCategory = null;
  currentIndex = -1;
  categoryname = '';

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
    this.retrieveCategories();
  }

  retrieveCategories() {
    this.categoryservice.getAll()
      .subscribe(
        data => {
          this.category = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCategories();
    this.currentCategory = null;
    this.currentIndex = -1;
  }

  setActiveCategory(category, index) {
    this.currentCategory = category;
    this.currentIndex = index;
  }
  editCategory(user, index){
    this.categoryname = user;
    this.currentIndex = index;

  }
  removeAllCategories() {
    this.categoryservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCategories();
        },
        error => {
          console.log(error);
        });
  }

  searchCategory() {
    this.categoryservice.findByCategory(this.categoryname)
      .subscribe(
        data => {
          this.category = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}