import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiaryPerformanceTableComponent } from './subsidiary-performance-table.component';

describe('SubsidiaryPerformanceTableComponent', () => {
  let component: SubsidiaryPerformanceTableComponent;
  let fixture: ComponentFixture<SubsidiaryPerformanceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubsidiaryPerformanceTableComponent]
    });
    fixture = TestBed.createComponent(SubsidiaryPerformanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
