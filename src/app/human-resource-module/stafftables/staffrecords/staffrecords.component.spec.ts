import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffrecordsComponent } from './staffrecords.component';

describe('StaffrecordsComponent', () => {
  let component: StaffrecordsComponent;
  let fixture: ComponentFixture<StaffrecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffrecordsComponent]
    });
    fixture = TestBed.createComponent(StaffrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
