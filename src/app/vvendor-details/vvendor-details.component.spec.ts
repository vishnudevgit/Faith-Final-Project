import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvendorDetailsComponent } from './vvendor-details.component';

describe('VvendorDetailsComponent', () => {
  let component: VvendorDetailsComponent;
  let fixture: ComponentFixture<VvendorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvendorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvendorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
