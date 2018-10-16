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
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
}
