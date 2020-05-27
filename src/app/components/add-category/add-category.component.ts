import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  category = {
    category: '',
  };
  submitted = false;

  constructor(private categoryservice: CategoryService) { }

  ngOnInit() {
  }

  saveCategory() {
    const data = {
      category: this.category.category,
    };

    this.categoryservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCategory() {
    this.submitted = false;
    this.category = {
      category: ''
    };
  }
}
