import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getPosts(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getUsersFrom() {
    return this.http.get('http://localhost:3000/users');
  }
  getPostsFrom() {
    return this.http.get('http://localhost:3000/posts');
  }
  addUser(user) {
    return this.http.post('http://localhost:3000/users', user);
  }
}
