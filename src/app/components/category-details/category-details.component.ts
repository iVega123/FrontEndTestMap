import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  currentCategory = null;
  message = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCategory(this.route.snapshot.paramMap.get('id'));
  }

  getCategory(id) {
    this.categoryService.get(id)
      .subscribe(
        data => {
          this.currentCategory = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCategory() {
    this.categoryService.update(this.currentCategory.id, this.currentCategory)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Category was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCategory() {
    this.categoryService.delete(this.currentCategory.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/categories']);
        },
        error => {
          console.log(error);
        });
  }



}
