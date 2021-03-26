import React from 'react';
import { render, screen } from '@testing-library/react';
import {items} from '../../youtube-videos-mock';
import VideoCardList from './index';

test('render video card list component', () => {
  render(<VideoCardList videos={items} channel={items[0]} />);

  const VideoCardListComponent = screen.getByTestId('VideoCardList')

  expect( VideoCardListComponent ).toBeInTheDocument()
});

test('renders a list of VideoCards', () => {
  render(<VideoCardList videos={items} channel={items[0]}/>);

  const VideoCards = screen.getAllByRole('article')

  expect(VideoCards.length).toBeGreaterThanOrEqual(24)
})
