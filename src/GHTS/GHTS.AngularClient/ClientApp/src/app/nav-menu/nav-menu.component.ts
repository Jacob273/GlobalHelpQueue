import { Component } from '@angular/core';
import { NavbarService } from './../services/navbar-service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
  export class NavMenuComponent {

  navigationService: NavbarService;

  constructor( public nav: NavbarService ) {
    this.navigationService = nav;
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
