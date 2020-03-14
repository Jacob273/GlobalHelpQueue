import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketItemCardComponent } from './ticket-item-card/ticket-item-card.component';

const routes: Routes = [
  { path: '', component: TicketsComponent }
];

@NgModule({
  declarations: [TicketsComponent, TicketItemCardComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class TicketsModule { }
