import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterdataHomeComponent } from './materdata-home.component';

describe('MaterdataHomeComponent', () => {
  let component: MaterdataHomeComponent;
  let fixture: ComponentFixture<MaterdataHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterdataHomeComponent]
    });
    fixture = TestBed.createComponent(MaterdataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
