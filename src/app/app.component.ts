import { Component } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Site name';

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }


    });
  }

}
