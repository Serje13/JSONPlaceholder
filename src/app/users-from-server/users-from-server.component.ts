import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-users-from-server',
  templateUrl: './users-from-server.component.html',
  styleUrls: ['./users-from-server.component.css']
})
export class UsersFromServerComponent implements OnInit {
  users: any[];
  newUser: any = {
    name: ''
  };
  value: any;
  constructor(private githubService: GithubService) {}
  onKey(event: any) {
    this.newUser.name = event.target.value;
  }
  newU() {
    this.githubService.addUser(this.newUser).subscribe((users: any) => (this.users = users));
  }
  getUsers() {
    this.githubService.getUsersFrom().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });
  }
  ngOnInit() {
    this.getUsers();
  }
}
