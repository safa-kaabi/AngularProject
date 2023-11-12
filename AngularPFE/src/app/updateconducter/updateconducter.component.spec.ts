import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconducterComponent } from './updateconducter.component';

describe('UpdateconducterComponent', () => {
  let component: UpdateconducterComponent;
  let fixture: ComponentFixture<UpdateconducterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateconducterComponent]
    });
    fixture = TestBed.createComponent(UpdateconducterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
