import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketItemCardComponent } from './ticket-item-card.component';

describe('TicketItemCardComponent', () => {
  let component: TicketItemCardComponent;
  let fixture: ComponentFixture<TicketItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
