import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './components/articles-details/articles-details.component';
import { AddArticlesComponent } from './components/add-articles/add-articles.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'users', component: UserListComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: 'adduser', component: AddUserComponent},
  {path:'articles', component: ArticlesListComponent},
  {path: 'articles/:id', component: ArticlesDetailsComponent},
  {path: 'addarticles', component: AddArticlesComponent},
  {path:'category', component: CategoryListComponent},
  {path: 'category/:id', component: CategoryDetailsComponent},
  {path: 'addcategory', component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
