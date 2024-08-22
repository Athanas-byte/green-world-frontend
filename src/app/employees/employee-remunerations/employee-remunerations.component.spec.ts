import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRemunerationsComponent } from './employee-remunerations.component';

describe('EmployeeRemunerationsComponent', () => {
  let component: EmployeeRemunerationsComponent;
  let fixture: ComponentFixture<EmployeeRemunerationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeRemunerationsComponent]
    });
    fixture = TestBed.createComponent(EmployeeRemunerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
