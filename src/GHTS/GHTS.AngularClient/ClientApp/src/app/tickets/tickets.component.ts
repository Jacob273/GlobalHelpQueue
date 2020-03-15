import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../services/navbar-service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  navigationService: NavbarService;

  ticketsArray: Ticket[] = [];

  constructor( public nav: NavbarService ) {
    this.navigationService = nav;
  }
  ngOnInit() {
    this.navigationService.show();

    this.ticketsArray =  [
      { id: '00002',
        title: 'Prosze o pomoc dla Dziadka - jesli jest ktos w okolicy Warszawy.',
        description: 'Dobrze by bylo gdyby ktos jeszcze dowiózl wodę i leki! Uwaga ma goraczke i nie moze wyjść po zakupy. Proszę o pomoc.',
        priority: 2},
        { id: '00003',
        title: 'Prosze o pomoc - czy moglby ktos zerknac na...',
        description: 'Super by bylo gdyby ktos jeszcze dowiózl wodę i leki! Uwaga ma goraczke i nie moze wyjść po zakupy. Proszę o pomoc.',
        priority: 2},
        { id: '00004',
        title: 'Prosze o pomoc dla Babci - jesli jest ktos w okolicy Warszawy.',
        description: 'Super by bylo gdyby ktos jeszcze dowiózl wodę i leki! Uwaga ma goraczke i nie moze wyjść po zakupy. Proszę o pomoc.',
        priority: 3},
    ];

    console.log(this.ticketsArray);

  }

}
