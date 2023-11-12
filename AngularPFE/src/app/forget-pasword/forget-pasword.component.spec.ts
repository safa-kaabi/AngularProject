import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPaswordComponent } from './forget-pasword.component';

describe('ForgetPaswordComponent', () => {
  let component: ForgetPaswordComponent;
  let fixture: ComponentFixture<ForgetPaswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPaswordComponent]
    });
    fixture = TestBed.createComponent(ForgetPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
