import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvendorlistComponent } from './vvendorlist.component';

describe('VvendorlistComponent', () => {
  let component: VvendorlistComponent;
  let fixture: ComponentFixture<VvendorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VvendorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvendorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
