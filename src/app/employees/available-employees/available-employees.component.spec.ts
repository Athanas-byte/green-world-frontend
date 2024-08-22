import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableEmployeesComponent } from './available-employees.component';

describe('AvailableEmployeesComponent', () => {
  let component: AvailableEmployeesComponent;
  let fixture: ComponentFixture<AvailableEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableEmployeesComponent]
    });
    fixture = TestBed.createComponent(AvailableEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
