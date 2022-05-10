import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<UserModel> = [];

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getItem().subscribe(items => {
      this.users = items;
    });
  }

}
