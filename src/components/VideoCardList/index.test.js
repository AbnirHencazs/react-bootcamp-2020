import React from 'react';
import { render, screen } from '@testing-library/react';
import mockData from '../../youtube-videos-mock';
import VideoCardList from './index';

test('render video card list', () => {
  render(<VideoCardList />);

  let response = screen.getByText(mockData.items[1].snippet.title);
  expect(response).toBeInTheDocument();

  response = screen.getByText(mockData.items[2].snippet.title);
  expect(response).toBeInTheDocument();
});
