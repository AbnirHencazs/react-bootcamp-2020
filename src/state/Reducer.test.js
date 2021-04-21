import reducer from './globalReducer';
import { SET_SEARCH_QUERY, SET_THEME, SET_USER } from '../utils/constants';

describe('reducer', () => {
  const iniState = {
    theme: 'light',
    searchQuery: '',
    user:{
      id: '',
      name: '',
      avatarUrl: ''
    }
  };

  test('set theme action works properly', () => {
    const action = {
      type: SET_THEME,
      payload: 'dark',
    };

    const expectedState = {
      theme: 'dark',
      searchQuery: '',
      user:{
        id: '',
        name: '',
        avatarUrl: ''
      }
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
      user:{
        id: '',
        name: '',
        avatarUrl: ''
      }
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
      user:{
        id: '',
        name: '',
        avatarUrl: ''
      }
    };

    expect(reducer(iniState, action)).toEqual(expectedState);
  });

  test("Set user works action works correctly", () => {
    const action = {
      type: SET_USER,
      payload: {
        id: '123',
        name: 'Wizeline',
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png'
      }
    }

    const expectedState = {
      theme: 'light',
      searchQuery: '',
      user:{
        id: '123',
        name: 'Wizeline',
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png'
      }
    }

    expect(reducer(iniState, action)).toEqual(expectedState)
  })
});
