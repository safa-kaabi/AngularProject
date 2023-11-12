import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconduterComponent } from './addconduter.component';

describe('AddconduterComponent', () => {
  let component: AddconduterComponent;
  let fixture: ComponentFixture<AddconduterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddconduterComponent]
    });
    fixture = TestBed.createComponent(AddconduterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
