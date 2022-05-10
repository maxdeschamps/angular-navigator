import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserModel} from "../../../models/user.model";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  constructor(public httpService: HttpService) { }

  ngOnInit(): void {


  }

  formGrpAddUser: FormGroup = new FormGroup({
    'firstname': new FormControl(),
    'lastname': new FormControl(),
    'framework': new FormControl(),
  })

  get formFirstName() {
    return this.formGrpAddUser.get('firstname');
  }

  get formLastName() {
    return this.formGrpAddUser.get('lastname');
  }

  get formFramework() {
    return this.formGrpAddUser.get('framework');
  }

  submitAddUser() {

    let user:UserModel = {
      framework: this.formFramework?.value,
      lastname: this.formLastName?.value,
      firstname: this.formFirstName?.value,
    }


    this.httpService.addUser(user);


  }


}
