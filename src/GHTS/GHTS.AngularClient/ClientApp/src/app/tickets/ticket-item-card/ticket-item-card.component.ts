import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-item-card',
  templateUrl: './ticket-item-card.component.html',
  styleUrls: ['./ticket-item-card.component.css']
})
export class TicketItemCardComponent implements OnInit {

 show: boolean;

  constructor() {
    this.show = false;
   }

  ngOnInit() {
  }

}
