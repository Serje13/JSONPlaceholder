import { Component, OnInit } from '@angular/core';
import { CardUserService } from '../card-user.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from './Post';
import { Comments } from './Comments';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
  post: Post;
  username: string;
  comments: Comments;
  id: number;
  constructor(private cardUserService: CardUserService, private rout: ActivatedRoute) {}
  getCom(id) {
    this.cardUserService.getComments(id).subscribe((comments: Comments) => {
      console.log(comments);
      this.comments = comments;
    });
  }
  ngOnInit() {
    this.rout.params.subscribe(({ id }) => {
      this.cardUserService.getPost(id).subscribe((post: Post) => {
        console.log(post);
        this.post = post;
        this.cardUserService.getUser(post.userId).subscribe((user: any) => (this.username = user.name));
      });
    });
    this.getCom(this.id);
  }
}
