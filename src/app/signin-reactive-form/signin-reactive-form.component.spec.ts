import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninReactiveFormComponent } from './signin-reactive-form.component';

describe('SigninReactiveFormComponent', () => {
  let component: SigninReactiveFormComponent;
  let fixture: ComponentFixture<SigninReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
