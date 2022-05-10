import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiBasePath = 'http://localhost:3000';

  constructor(public httpClient: HttpClient) { }

  getItem() {
    return this.httpClient.get<Array<UserModel>>(this.apiBasePath + "/users");
  }

  addUser(user: UserModel) {
    return this.httpClient.post<any>(this.apiBasePath + "/users", user).subscribe(data => {
      console.log(data)
    })
  }

}
