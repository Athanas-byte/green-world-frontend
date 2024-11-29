import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcompensationComponent } from './staffcompensation.component';

describe('StaffcompensationComponent', () => {
  let component: StaffcompensationComponent;
  let fixture: ComponentFixture<StaffcompensationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffcompensationComponent]
    });
    fixture = TestBed.createComponent(StaffcompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
