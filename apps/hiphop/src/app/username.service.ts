import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  constructor(private readonly http: HttpClient) {}

  checkUsername(username: string) {
    return this.http
      .get<{ taken: boolean }>(
        `https://hxj1tck8l1.execute-api.us-east-1.amazonaws.com/default/users/taken?username=${username}`
      )
      .pipe(
        tap((_) => console.log('Checking name')),
        delay(2000),
        tap((_) => console.log('Name checked')),
        catchError((error) => {
          throw new Error('Something is not right.. just not right');
        }),
        map((result) => result.taken)
      );
  }
}
