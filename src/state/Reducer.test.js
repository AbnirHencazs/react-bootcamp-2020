import reducer from './globalReducer';
import { SET_SEARCH_QUERY, SET_THEME } from '../utils/constants';

describe('reducer', () => {
  const iniState = {
    theme: 'light',
    searchQuery: '',
  };

  test('set theme action works properly', () => {
    const action = {
      type: SET_THEME,
      payload: 'dark',
    };

    const expectedState = {
      theme: 'dark',
      searchQuery: '',
    };

    expect(reducer(iniState, action)).toEqual(expectedState);
  });

  test('set theme action without changing other properties', () => {
    const action = {
      type: SET_THEME,
      payload: 'dark',
    };

    const expectedState = {
      theme: 'dark',
      searchQuery: '',
    };

    expect(reducer(iniState, action)).toEqual(expectedState);
  });

  test('Search query changes according to payload dispatch', () => {
    const action = {
      type: SET_SEARCH_QUERY,
      payload: 'wizeline',
    };

    const expectedState = {
      theme: 'light',
      searchQuery: 'wizeline',
    };

    expect(reducer(iniState, action)).toEqual(expectedState);
  });
});
