import { Action, createReducer, createSelector, on, select } from '@ngrx/store';
import * as ReduxActions from './redux.actions';

//Models
import { characters, locations, episodes } from './models/redux.model';

export const reduxFeatureKey = 'redux';

export interface State {
  character: characters,
  location: locations,
  episodes: episodes
}

export const initialState: State = {
  character: {results: []},
  location: {results: []},
  episodes: {results: []}
};

export const selectCharacters = (state: State) => state.character;
export const selectLocations = (state: State) => state.location;
export const selectEpisodes = (state: State) => state.episodes;

export const selectCharactersValue = createSelector(
  selectCharacters,
  (state: characters) => state.results
);
export const selectLocationsValue = createSelector(
  selectLocations,
  (state: locations) => state.results
);
export const selectEpisodesValue = createSelector(
  selectEpisodes,
  (state: episodes) => state.results
);

export function reducerRickyMorty(state: State = initialState, action: Action){
  switch(action.type){
    case "GET_ALL_CHARACTERS":
      var newState:any;
      
      return {
        ...state,

      }
    default:
      return state;
  }
}
