import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOutCardComponent } from './delivery-out-card.component';

describe('DeliveryOutCardComponent', () => {
  let component: DeliveryOutCardComponent;
  let fixture: ComponentFixture<DeliveryOutCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryOutCardComponent]
    });
    fixture = TestBed.createComponent(DeliveryOutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
