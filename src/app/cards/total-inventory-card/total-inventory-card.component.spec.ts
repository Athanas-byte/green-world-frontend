import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInventoryCardComponent } from './total-inventory-card.component';

describe('TotalInventoryCardComponent', () => {
  let component: TotalInventoryCardComponent;
  let fixture: ComponentFixture<TotalInventoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalInventoryCardComponent]
    });
    fixture = TestBed.createComponent(TotalInventoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
