import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryInTransitCardComponent } from './inventory-in-transit-card.component';

describe('InventoryInTransitCardComponent', () => {
  let component: InventoryInTransitCardComponent;
  let fixture: ComponentFixture<InventoryInTransitCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryInTransitCardComponent]
    });
    fixture = TestBed.createComponent(InventoryInTransitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
