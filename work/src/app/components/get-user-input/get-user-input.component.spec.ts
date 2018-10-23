import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserInputComponent } from './get-user-input.component';

describe('GetUserInputComponent', () => {
  let component: GetUserInputComponent;
  let fixture: ComponentFixture<GetUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
