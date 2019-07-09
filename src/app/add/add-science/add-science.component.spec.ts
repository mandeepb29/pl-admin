import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScienceComponent } from './add-science.component';

describe('AddScienceComponent', () => {
  let component: AddScienceComponent;
  let fixture: ComponentFixture<AddScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
