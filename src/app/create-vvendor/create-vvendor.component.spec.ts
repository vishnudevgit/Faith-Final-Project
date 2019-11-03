import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVvendorComponent } from './create-vvendor.component';

describe('CreateVvendorComponent', () => {
  let component: CreateVvendorComponent;
  let fixture: ComponentFixture<CreateVvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
