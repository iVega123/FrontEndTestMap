import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-add-articles',
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.scss']
})
export class AddArticlesComponent implements OnInit {
  article = {
    titulo: '',
    corpo: '',
    autor: '',
    Categorias: [{}]
  };
  submitted = false;

  constructor(private articlesservice: ArticlesService) { }

  ngOnInit() {
  }

  saveArticle() {
    const data = {
      titulo: this.article.titulo,
      corpo: this.article.corpo,
      autor: this.article.autor,
      Categorias: this.article.Categorias
    };

    this.articlesservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArticle() {
    this.submitted = false;
    this.article = {
      titulo: '',
      corpo: '',
      autor: '',
      Categorias: [{}]
    };
  }
}
