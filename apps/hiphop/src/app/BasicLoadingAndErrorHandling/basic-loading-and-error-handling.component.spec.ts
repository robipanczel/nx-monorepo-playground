import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicLoadingAndErrorHandlingComponent } from './basic-loading-and-error-handling.component';

describe('BasicLoadingAndErrorHandlingComponent', () => {
  let component: BasicLoadingAndErrorHandlingComponent;
  let fixture: ComponentFixture<BasicLoadingAndErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLoadingAndErrorHandlingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicLoadingAndErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
