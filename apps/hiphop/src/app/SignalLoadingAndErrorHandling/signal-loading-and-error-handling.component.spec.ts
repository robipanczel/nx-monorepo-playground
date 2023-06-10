import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalLoadingAndErrorHandlingComponent } from './signal-loading-and-error-handling.component';

describe('SignalLoadingAndErrorHandlingComponent', () => {
  let component: SignalLoadingAndErrorHandlingComponent;
  let fixture: ComponentFixture<SignalLoadingAndErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLoadingAndErrorHandlingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalLoadingAndErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
