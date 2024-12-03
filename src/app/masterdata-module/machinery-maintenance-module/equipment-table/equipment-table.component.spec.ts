import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTableComponent } from './equipment-table.component';

describe('EquipmentTableComponent', () => {
  let component: EquipmentTableComponent;
  let fixture: ComponentFixture<EquipmentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipmentTableComponent]
    });
    fixture = TestBed.createComponent(EquipmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
