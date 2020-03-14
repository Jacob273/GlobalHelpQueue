import { Component, OnInit } from '@angular/core';
import { NavbarService } from './../services/navbar-service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  navigationService: NavbarService;

  constructor( public nav: NavbarService ) {
    this.navigationService = nav;
  }
  ngOnInit() {
    this.navigationService.show();
  }

}
