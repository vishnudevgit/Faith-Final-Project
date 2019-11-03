import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvendorEditComponent } from './vvendor-edit.component';

describe('VvendorEditComponent', () => {
  let component: VvendorEditComponent;
  let fixture: ComponentFixture<VvendorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvendorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvendorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
