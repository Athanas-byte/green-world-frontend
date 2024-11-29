import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerstableComponent } from './careerstable.component';

describe('CareerstableComponent', () => {
  let component: CareerstableComponent;
  let fixture: ComponentFixture<CareerstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerstableComponent]
    });
    fixture = TestBed.createComponent(CareerstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
