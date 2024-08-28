import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDistributionGraphComponent } from './product-distribution-graph.component';

describe('ProductDistributionGraphComponent', () => {
  let component: ProductDistributionGraphComponent;
  let fixture: ComponentFixture<ProductDistributionGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDistributionGraphComponent]
    });
    fixture = TestBed.createComponent(ProductDistributionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
