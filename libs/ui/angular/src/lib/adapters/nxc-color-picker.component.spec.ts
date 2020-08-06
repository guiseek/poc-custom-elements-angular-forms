import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxcColorPickerComponent } from './nxc-color-picker.component';

describe('NxcColorPickerComponent', () => {
  let component: NxcColorPickerComponent;
  let fixture: ComponentFixture<NxcColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxcColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxcColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
