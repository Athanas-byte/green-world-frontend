import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPiechartComponent } from './sales-piechart.component';

describe('SalesPiechartComponent', () => {
  let component: SalesPiechartComponent;
  let fixture: ComponentFixture<SalesPiechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesPiechartComponent]
    });
    fixture = TestBed.createComponent(SalesPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
