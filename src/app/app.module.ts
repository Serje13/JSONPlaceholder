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
import { UsersFromServerComponent } from './users-from-server/users-from-server.component';
import { UserFromServerComponent } from './user-from-server/user-from-server.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostsFromServerComponent } from './posts-from-server/posts-from-server.component';
import { PostFromServerComponent } from './post-from-server/post-from-server.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: CardUsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: CardPostComponent },
  { path: 'fromserver/users', component: UsersFromServerComponent },
  { path: 'fromserver/users/:id', component: UserFromServerComponent },
  { path: 'fromserver/posts', component: PostsFromServerComponent },
  { path: 'fromserver/posts/:id', component: PostFromServerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardUsersComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    CardPostComponent,
    UsersFromServerComponent,
    UserFromServerComponent,
    PostsFromServerComponent,
    PostFromServerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
