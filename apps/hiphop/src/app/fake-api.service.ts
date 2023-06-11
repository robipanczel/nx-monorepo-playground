import { Injectable } from '@angular/core';
import { concatMap, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  getModule(moduleId: string) {
    return of('asd123', 'qwe123', 'yxc123', 'vbn123', 'fgh123').pipe(
      concatMap((module) => of(module).pipe(delay(3000))),
      tap((module) => {
        if (module === 'vbn123') {
          throw new Error('BIG OOFFF');
        }
      })
    );
  }
}
