import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiService } from '../fake-api.service';
import { catchError, ignoreElements, of } from 'rxjs';

@Component({
  selector: 'nx-monorepo-playground-basic-loading-and-error-handling',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container
      *ngIf="{
        module: module$ | async,
        moduleError: moduleError$ | async
      } as data"
    >
      <div *ngIf="data.moduleError as moduleError">
        Something went wrong: {{ moduleError }}
      </div>

      <div *ngIf="data.module as module; else loading">
        {{ module }}
      </div>

      <ng-template #loading>
        <div>Content is loading</div>
      </ng-template>
    </ng-container>
  `,
  styles: [],
})
export class BasicLoadingAndErrorHandlingComponent {
  module$ = this.fakeApiService.getModule('asd123');
  moduleError$ = this.module$.pipe(
    ignoreElements(),
    catchError((error) => of(error))
  );

  constructor(public readonly fakeApiService: FakeApiService) {}
}
