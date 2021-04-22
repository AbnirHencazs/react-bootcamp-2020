import reducer from './globalReducer';
import mockVideos from '../youtube-videos-mock'
import { ADD_FAVOURITE, SET_SEARCH_QUERY, SET_THEME, SET_USER, UNSET_USER } from '../utils/constants';

describe('reducer', () => {
  const iniState = {
    theme: 'light',
    searchQuery: '',
    user:{
      id: '',
      name: '',
      avatarUrl: '',
      authenticated: false
    },
    favourites:[]
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
        avatarUrl: '',
        authenticated: false
      },
      favourites:[]
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
        avatarUrl: '',
        authenticated: false
      },
      favourites:[]
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
        avatarUrl: '',
        authenticated: false
      },
      favourites:[]
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
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        authenticated: true
      },
      favourites:[]
    }

    expect(reducer(iniState, action)).toEqual(expectedState)
  })

  test("Unset user action works properlly", () => {
    const iniState = {
      theme: 'light',
      searchQuery: '',
      user:{
        id: '123',
        name: 'Wizeline',
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        authenticated: true
      },
    };

    const expectedState = {
      theme: 'light',
      searchQuery: '',
      user:{
        authenticated: false
      }
    }

    const action = {
      type: UNSET_USER,
      payload:{}
    }

    expect(reducer(iniState, action)).toEqual(expectedState)

  })

  test("add favourite video action works properly", () => {
    const video = mockVideos.items[1]

    const expectedState = {
      theme: 'light',
      searchQuery: '',
      user:{
        id: '',
        name: '',
        avatarUrl: '',
        authenticated: false
      },
      favourites:[ video ]
    }

    const action = {
      type: ADD_FAVOURITE,
      payload: {
        ...video
      }
    }

    expect(reducer(iniState, action)).toEqual(expectedState)
  })
});
