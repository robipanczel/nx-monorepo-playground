import { Component } from '@angular/core';
import { UsernameValidationComponent } from './UsernameValidation/username-validation.component';
import { BasicLoadingAndErrorHandlingComponent } from './BasicLoadingAndErrorHandling/basic-loading-and-error-handling.component';

@Component({
  standalone: true,
  selector: 'nx-monorepo-playground-root',
  template: `
    <h1>Welcome hiphop</h1>
    <!-- <nx-monorepo-playground-username-validation></nx-monorepo-playground-username-validation> -->
    <nx-monorepo-playground-basic-loading-and-error-handling></nx-monorepo-playground-basic-loading-and-error-handling>
  `,
  styles: [''],
  imports: [UsernameValidationComponent, BasicLoadingAndErrorHandlingComponent],
})
export class AppComponent {}
