import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartiesChartComponent } from './counterparties-chart.component';

describe('CounterpartiesChartComponent', () => {
  let component: CounterpartiesChartComponent;
  let fixture: ComponentFixture<CounterpartiesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterpartiesChartComponent]
    });
    fixture = TestBed.createComponent(CounterpartiesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
