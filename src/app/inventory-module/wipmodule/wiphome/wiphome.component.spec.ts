import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiphomeComponent } from './wiphome.component';

describe('WiphomeComponent', () => {
  let component: WiphomeComponent;
  let fixture: ComponentFixture<WiphomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WiphomeComponent]
    });
    fixture = TestBed.createComponent(WiphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
