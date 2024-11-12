import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishAlertCardComponent } from './replenish-alert-card.component';

describe('ReplenishAlertCardComponent', () => {
  let component: ReplenishAlertCardComponent;
  let fixture: ComponentFixture<ReplenishAlertCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplenishAlertCardComponent]
    });
    fixture = TestBed.createComponent(ReplenishAlertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
