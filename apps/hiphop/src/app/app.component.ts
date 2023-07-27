import { Component } from '@angular/core';
import { UsernameValidationComponent } from './UsernameValidation/username-validation.component';

@Component({
  standalone: true,
  imports: [UsernameValidationComponent],
  selector: 'nx-monorepo-playground-root',
  template: `
    <h1>Welcome hiphop</h1>
    <nx-monorepo-playground-username-validation></nx-monorepo-playground-username-validation>
  `,
  styles: [''],
})
export class AppComponent {}
