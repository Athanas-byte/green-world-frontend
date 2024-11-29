import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiaryTableComponent } from './subsidiary-table.component';

describe('SubsidiaryTableComponent', () => {
  let component: SubsidiaryTableComponent;
  let fixture: ComponentFixture<SubsidiaryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubsidiaryTableComponent]
    });
    fixture = TestBed.createComponent(SubsidiaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
