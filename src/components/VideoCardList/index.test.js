import React from 'react';
import { render, screen } from '@testing-library/react';
import {items} from '../../youtube-videos-mock';
import VideoCardList from './index';

test('render video card list component', () => {
  render(<VideoCardList videos={items} channel={items[0]} />);

  const VideoCards = screen.getByTestId('VideoCardList')

  expect( VideoCards ).toBeInTheDocument()
});
