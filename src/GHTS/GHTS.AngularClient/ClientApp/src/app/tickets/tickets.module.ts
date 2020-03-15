import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketItemCardComponent } from './ticket-item-card/ticket-item-card.component';
import { TicketHeaderComponent } from './ticket-header/ticket-header.component';

const routes: Routes = [
  { path: '', component: TicketsComponent }
];

@NgModule({
  declarations: [TicketsComponent, TicketItemCardComponent, TicketHeaderComponent],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class TicketsModule { }
