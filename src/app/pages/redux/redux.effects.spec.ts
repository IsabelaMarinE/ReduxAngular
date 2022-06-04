import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReduxEffects } from './redux.effects';

describe('ReduxEffects', () => {
  let actions$: Observable<any>;
  let effects: ReduxEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReduxEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReduxEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
