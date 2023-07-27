import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UsernameService } from '../username.service';
import { Observable, map, tap } from 'rxjs';

// https://hxj1tck8l1.execute-api.us-east-1.amazonaws.com/default/users/taken?username=tulip2014

@Component({
  selector: 'nx-monorepo-playground-username-validation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="userInformationForm" (ngSubmit)="validateUsername()">
      <p>
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          formControlName="username"
        />
      </p>
      <dir *ngIf="userInformationForm.controls.username.invalid">
        Invalid username
        {{ userInformationForm.controls.username.errors | json }}
      </dir>
      <p><button type="submit">Submit</button></p>
    </form>
  `,
  styles: [],
})
export class UsernameValidationComponent {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly usernameService: UsernameService
  ) {}

  userInformationForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(4)],
      UsernameValidator.validateWith(this.usernameService),
    ],
  });

  validateUsername() {
    console.log(this.userInformationForm.value);
  }
}

class UsernameValidator {
  static validateWith(usernameService: UsernameService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return usernameService
        .checkUsername(control.value)
        .pipe(
          map((isTaken: boolean) =>
            isTaken ? { usernameAlreadyExists: true } : null
          )
        );
    };
  }
}
