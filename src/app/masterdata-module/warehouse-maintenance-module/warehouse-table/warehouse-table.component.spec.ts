import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseTableComponent } from './warehouse-table.component';

describe('WarehouseTableComponent', () => {
  let component: WarehouseTableComponent;
  let fixture: ComponentFixture<WarehouseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseTableComponent]
    });
    fixture = TestBed.createComponent(WarehouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
