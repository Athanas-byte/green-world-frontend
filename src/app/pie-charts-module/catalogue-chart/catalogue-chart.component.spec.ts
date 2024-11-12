import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueChartComponent } from './catalogue-chart.component';

describe('CatalogueChartComponent', () => {
  let component: CatalogueChartComponent;
  let fixture: ComponentFixture<CatalogueChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueChartComponent]
    });
    fixture = TestBed.createComponent(CatalogueChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
