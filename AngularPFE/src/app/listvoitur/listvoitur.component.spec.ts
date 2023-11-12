import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvoiturComponent } from './listvoitur.component';

describe('ListvoiturComponent', () => {
  let component: ListvoiturComponent;
  let fixture: ComponentFixture<ListvoiturComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListvoiturComponent]
    });
    fixture = TestBed.createComponent(ListvoiturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
