import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyPiechartComponent } from './counterparty-piechart.component';

describe('CounterpartyPiechartComponent', () => {
  let component: CounterpartyPiechartComponent;
  let fixture: ComponentFixture<CounterpartyPiechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterpartyPiechartComponent]
    });
    fixture = TestBed.createComponent(CounterpartyPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
