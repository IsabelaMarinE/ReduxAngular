import * as fromRedux from './redux.reducer';
import { selectReduxState } from './redux.selectors';

describe('Redux Selectors', () => {
  it('should select the feature state', () => {
    const result = selectReduxState({
      [fromRedux.reduxFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
