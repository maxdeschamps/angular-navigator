import { Component } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import { ModalService } from 'sandouich';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Site name';

  currentRoute: string;
  displayed = true;

  constructor(private router: Router, public modalService: ModalService) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }


    });
  }

  ngOnInit(): void {
    this.modalService.display.subscribe(s => {
      this.displayed = s;
    });
  }

  alert($event: boolean) {
    this.modalService.check();
  }

  openModal() {
    this.modalService.enable();
  }
}
