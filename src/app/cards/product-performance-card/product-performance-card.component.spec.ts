import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPerformanceCardComponent } from './product-performance-card.component';

describe('ProductPerformanceCardComponent', () => {
  let component: ProductPerformanceCardComponent;
  let fixture: ComponentFixture<ProductPerformanceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPerformanceCardComponent]
    });
    fixture = TestBed.createComponent(ProductPerformanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
