import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashflowAnalyticalgraphComponent } from './cashflow-analyticalgraph.component';

describe('CashflowAnalyticalgraphComponent', () => {
  let component: CashflowAnalyticalgraphComponent;
  let fixture: ComponentFixture<CashflowAnalyticalgraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashflowAnalyticalgraphComponent]
    });
    fixture = TestBed.createComponent(CashflowAnalyticalgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
