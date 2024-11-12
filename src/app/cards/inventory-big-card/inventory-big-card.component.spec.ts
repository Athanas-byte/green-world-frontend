import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBigCardComponent } from './inventory-big-card.component';

describe('InventoryBigCardComponent', () => {
  let component: InventoryBigCardComponent;
  let fixture: ComponentFixture<InventoryBigCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryBigCardComponent]
    });
    fixture = TestBed.createComponent(InventoryBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
