import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-posts-from-server',
  templateUrl: './posts-from-server.component.html',
  styleUrls: ['./posts-from-server.component.css']
})
export class PostsFromServerComponent implements OnInit {
  posts: any[];
  constructor(private githubService: GithubService) {}

  getPosts() {
    this.githubService.getPostsFrom().subscribe((posts: any) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  ngOnInit() {
    this.getPosts();
  }
}
