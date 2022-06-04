import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRedux from './redux.reducer';

export const selectReduxState = createFeatureSelector<fromRedux.State>(
  fromRedux.reduxFeatureKey
);
