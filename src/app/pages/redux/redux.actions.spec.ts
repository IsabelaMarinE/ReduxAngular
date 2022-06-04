import * as fromRedux from './redux.actions';

describe('loadReduxs', () => {
  it('should return an action', () => {
    expect(fromRedux.loadReduxs().type).toBe('[Redux] Load Reduxs');
  });
});
