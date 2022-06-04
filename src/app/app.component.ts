import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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

  //Iframe
  idFrame="frame-id";
  titleIFrame = "Title Iframe";
  widthIFrame = "100%";
  heightIFrame = "400px";
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.818693535373!2d4.8373755327444306!3d45.74568000348575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea47ef557179%3A0x9c043d6c0f43647f!2sLyon%20Ynov%20Campus!5e0!3m2!1sfr!2sfr!4v1653992335069!5m2!1sfr!2sfr";

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
