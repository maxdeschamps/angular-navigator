import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  title = "À propos";
  content = "Mon contenu d'à propos";

  constructor() { }

  ngOnInit(): void { }

}
