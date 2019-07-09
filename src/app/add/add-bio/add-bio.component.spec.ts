import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBioComponent } from './add-bio.component';

describe('AddBioComponent', () => {
  let component: AddBioComponent;
  let fixture: ComponentFixture<AddBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
