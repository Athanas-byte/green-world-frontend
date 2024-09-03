import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRemunerationComponent } from './employee-remuneration.component';

describe('EmployeeRemunerationComponent', () => {
  let component: EmployeeRemunerationComponent;
  let fixture: ComponentFixture<EmployeeRemunerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeRemunerationComponent]
    });
    fixture = TestBed.createComponent(EmployeeRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
