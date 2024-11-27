import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffjourneyComponent } from './staffjourney.component';

describe('StaffjourneyComponent', () => {
  let component: StaffjourneyComponent;
  let fixture: ComponentFixture<StaffjourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffjourneyComponent]
    });
    fixture = TestBed.createComponent(StaffjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
