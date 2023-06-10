import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subscription, map, of, repeat, share } from 'rxjs';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

interface Movie {
  name: string;
  length: number;
  type: string;
}

const movies: Movie[] = [
  {
    name: 'The Shawshank Redemption',
    length: 142,
    type: 'Drama',
  },
  {
    name: 'The Godfather',
    length: 175,
    type: 'Crime',
  },
  {
    name: 'Pulp Fiction',
    length: 154,
    type: 'Crime',
  },
  {
    name: 'The Dark Knight',
    length: 152,
    type: 'Action',
  },
  {
    name: 'Forrest Gump',
    length: 142,
    type: 'Drama',
  },
  {
    name: 'Inception',
    length: 148,
    type: 'Sci-Fi',
  },
  {
    name: 'The Matrix',
    length: 136,
    type: 'Sci-Fi',
  },
  {
    name: 'Fight Club',
    length: 139,
    type: 'Drama',
  },
];

@Component({
  standalone: true,
  imports: [RouterModule, ChildComponent, CommonModule],
  selector: 'nx-monorepo-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies$!: Observable<Movie[]>;
  movieNames$!: Observable<string[]>;
  subscriptions: Subscription[] = [];

  constructor() {
    const sharedSource = of(movies)
      .pipe(map((movies) => shuffleArray(movies)))
      .pipe(repeat({ delay: 2000 }))
      .pipe(share());

    this.movies$ = sharedSource;
    this.movieNames$ = sharedSource.pipe(
      map((movies) => movies.map((m) => m.name))
    );
  }
}
