import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfhelpComponent } from './selfhelp.component';

describe('SelfhelpComponent', () => {
  let component: SelfhelpComponent;
  let fixture: ComponentFixture<SelfhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
