import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddArticlesComponent } from './components/add-articles/add-articles.component';
import { ArticlesDetailsComponent } from './components/articles-details/articles-details.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    AddArticlesComponent,
    ArticlesDetailsComponent,
    ArticlesListComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
