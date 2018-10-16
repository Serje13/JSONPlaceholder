import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private githubService: GithubService) {}
  getUsers() {
    this.githubService.getUsers().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });
  }
  ngOnInit() {
    this.getUsers();
  }
}
