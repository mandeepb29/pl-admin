import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfhelpComponent } from './add-selfhelp.component';

describe('AddSelfhelpComponent', () => {
  let component: AddSelfhelpComponent;
  let fixture: ComponentFixture<AddSelfhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSelfhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSelfhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
