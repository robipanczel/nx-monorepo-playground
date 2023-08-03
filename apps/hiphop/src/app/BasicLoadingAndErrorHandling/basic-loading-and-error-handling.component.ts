import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiService } from '../fake-api.service';
import {
  catchError,
  ignoreElements,
  map,
  merge,
  of,
  share,
  switchMap,
  tap,
  timer,
} from 'rxjs';

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
  module$ = this.fakeApiService.getModule('asd123').pipe(map((a) => a + 100));
  moduleError$ = this.module$.pipe(
    tap((va) => console.log(va)),
    ignoreElements(),
    catchError((error) => of(error))
  );

  res ='';

  request$ = this.fakeApiService.getModule('asd123').pipe(
    tap({
      next: (res) => {
        console.log('HAPPY CASE ');
        this.res = res;
      },
      error: () => {
        console.error('ERROR');
      },
    })
  );

  timerForRequest$ = timer(5000).pipe(
    tap(() => {
      console.log('Time is up');
    }),
    map(() => null)
  );

  constructor(public readonly fakeApiService: FakeApiService) {
    // this.module$.subscribe((a) => console.log(a));
    // this.moduleError$.subscribe((a) => console.log('this.moduleError$'));

    merge(this.request$, this.timerForRequest$).subscribe();
  }
}
