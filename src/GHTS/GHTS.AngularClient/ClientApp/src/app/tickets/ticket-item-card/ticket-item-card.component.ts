import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-ticket-item-card',
  templateUrl: './ticket-item-card.component.html',
  styleUrls: ['./ticket-item-card.component.css']
})
export class TicketItemCardComponent implements OnInit {

  @Input() ticket: Ticket;
  show: boolean;

  constructor() {
    this.show = false;
   }

  ngOnInit() {
  }

}
