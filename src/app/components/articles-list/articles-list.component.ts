import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: any;
  currentArticle = null;
  currentIndex = -1;
  titulo= '';

  constructor(private articleservice: ArticlesService) { }

  ngOnInit() {
    this.retrieveArticles();
  }

  retrieveArticles() {
    this.articleservice.getAll()
      .subscribe(
        data => {
          this.articles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveArticles();
    this.currentArticle = null;
    this.currentIndex = -1;
  }

  setActiveArticle(article, index) {
    this.currentArticle = article;
    this.currentIndex = index;
  }

  removeAllArticles() {
    this.articleservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveArticles();
        },
        error => {
          console.log(error);
        });
  }

  searchArticle() {
    this.articleservice.findByTitulo(this.titulo)
      .subscribe(
        data => {
          this.articles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  editArticle(user, index){
    this.articles = user;
    this.currentIndex = index;

  }

}
