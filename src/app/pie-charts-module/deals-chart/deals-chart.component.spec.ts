import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsChartComponent } from './deals-chart.component';

describe('DealsChartComponent', () => {
  let component: DealsChartComponent;
  let fixture: ComponentFixture<DealsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealsChartComponent]
    });
    fixture = TestBed.createComponent(DealsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
