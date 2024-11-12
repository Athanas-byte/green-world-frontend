import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInCardComponent } from './delivery-in-card.component';

describe('DeliveryInCardComponent', () => {
  let component: DeliveryInCardComponent;
  let fixture: ComponentFixture<DeliveryInCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryInCardComponent]
    });
    fixture = TestBed.createComponent(DeliveryInCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
