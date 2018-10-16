import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { CardUsersComponent } from '../app/card-users/card-users.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CardPostComponent } from './card-post/card-post.component';
import { MatCardModule } from '@angular/material/card';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: CardUsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: CardPostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardUsersComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    CardPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
