import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixoComponent } from './fixo.component';

describe('FixoComponent', () => {
  let component: FixoComponent;
  let fixture: ComponentFixture<FixoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixoComponent]
    });
    fixture = TestBed.createComponent(FixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
