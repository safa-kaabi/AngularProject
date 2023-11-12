import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConducterlistComponent } from './conducterlist.component';

describe('ConducterlistComponent', () => {
  let component: ConducterlistComponent;
  let fixture: ComponentFixture<ConducterlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConducterlistComponent]
    });
    fixture = TestBed.createComponent(ConducterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
