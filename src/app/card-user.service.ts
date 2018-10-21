import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardUserService {
  constructor(private http: HttpClient) {}

  getUser(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  getPost(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getComments(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
  getUserFrom(id) {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }
  getPostFrom(id) {
    return this.http.get(`http://localhost:3000/posts/${id}`);
  }
  getCommentsFrom(postId) {
    return this.http.get(`http://localhost:3000/comments?postId=${postId}`);
  }
}
