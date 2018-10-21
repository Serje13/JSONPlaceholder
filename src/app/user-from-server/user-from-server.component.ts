import { Component, OnInit } from '@angular/core';
import { CardUserService } from '../card-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-from-server',
  templateUrl: './user-from-server.component.html',
  styleUrls: ['./user-from-server.component.css']
})
export class UserFromServerComponent implements OnInit {
  user: any[];
  constructor(private cardUserService: CardUserService, private rout: ActivatedRoute) {}

  ngOnInit() {
    this.rout.params.subscribe(({ id }) => {
      this.cardUserService.getUserFrom(id).subscribe((user: any) => {
        console.log(user);
        this.user = user;
      });
    });
  }
}
