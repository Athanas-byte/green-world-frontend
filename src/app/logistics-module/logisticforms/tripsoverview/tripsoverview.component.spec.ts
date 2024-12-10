import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsoverviewComponent } from './tripsoverview.component';

describe('TripsoverviewComponent', () => {
  let component: TripsoverviewComponent;
  let fixture: ComponentFixture<TripsoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsoverviewComponent]
    });
    fixture = TestBed.createComponent(TripsoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
