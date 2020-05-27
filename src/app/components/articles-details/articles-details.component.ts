import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent implements OnInit {

  currentArticles = null;
  message = '';

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getArticle(this.route.snapshot.paramMap.get('id'));
  }

  getArticle(id) {
    this.articleService.get(id)
      .subscribe(
        data => {
          this.currentArticles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status) {
    const data = {
      titulo: this.currentArticles.title,
      corpo: this.currentArticles.corpo,
      autor: this.currentArticles.autor,
      Categorias: this.currentArticles.Categorias,
      published: this.currentArticles.published
    };

    this.articleService.update(this.currentArticles.id, data)
      .subscribe(
        response => {
          this.currentArticles.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateArticle() {
    this.articleService.update(this.currentArticles.id, this.currentArticles)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Category was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteArticle() {
    this.articleService.delete(this.currentArticles.id)
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
