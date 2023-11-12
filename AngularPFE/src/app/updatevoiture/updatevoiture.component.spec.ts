import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevoitureComponent } from './updatevoiture.component';

describe('UpdatevoitureComponent', () => {
  let component: UpdatevoitureComponent;
  let fixture: ComponentFixture<UpdatevoitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatevoitureComponent]
    });
    fixture = TestBed.createComponent(UpdatevoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
