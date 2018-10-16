import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private githubService: GithubService, private rout: ActivatedRoute) {}

  ngOnInit() {
    this.rout.params.subscribe(({ id }) => {
      this.githubService.getPosts(id).subscribe((posts: any) => {
        console.log(posts);
        this.posts = posts;
      });
    });
  }
}
