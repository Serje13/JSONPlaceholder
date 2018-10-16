import { Component, OnInit } from '@angular/core';
import { CardUserService } from '../card-user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './User';

@Component({
  selector: 'app-card-users',
  templateUrl: './card-users.component.html',
  styleUrls: ['./card-users.component.css']
})
export class CardUsersComponent implements OnInit {
  user: User;

  constructor(private cardUserService: CardUserService, private rout: ActivatedRoute) {}

  ngOnInit() {
    this.rout.params.subscribe(({ id }) => {
      this.cardUserService.getUser(id).subscribe((user: User) => {
        console.log(user);
        this.user = user;
      });
    });
  }
}
