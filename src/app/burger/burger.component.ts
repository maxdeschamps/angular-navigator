import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  @Output() event: EventEmitter<boolean> = new EventEmitter<boolean>();
  clicked = false;

  constructor() { }

  ngOnInit(): void { }

  handleMenuEvent() {
    this.clicked = !this.clicked;
    this.event.emit(this.clicked);
  }
}
