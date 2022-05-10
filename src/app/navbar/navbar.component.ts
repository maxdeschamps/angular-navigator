import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  site_title = "Mon site";
  open = false ;

  constructor() { }

  ngOnInit(): void { }

  handleMenu($event: boolean) {
    this.open = $event;
  }
}
