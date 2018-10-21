import { Component, OnInit } from '@angular/core';
import { CardUserService } from '../card-user.service';
import { ActivatedRoute } from '@angular/router';
import { PostF } from './PostFromServer';

@Component({
  selector: 'app-post-from-server',
  templateUrl: './post-from-server.component.html',
  styleUrls: ['./post-from-server.component.css']
})
export class PostFromServerComponent implements OnInit {
  postF: PostF;
  comments: any[];
  id: number;
  constructor(private cardUserService: CardUserService, private rout: ActivatedRoute) {}
  getCommentsF(id) {
    this.cardUserService.getCommentsFrom(id).subscribe((comments: any) => {
      console.log(comments);
      this.comments = comments;
    });
  }
  ngOnInit() {
    this.rout.params.subscribe(({ id }) => {
      this.cardUserService.getPostFrom(id).subscribe((postF: PostF) => {
        console.log(postF);
        this.postF = postF;
      });
    });
  }
}
