import React from 'react';
import { render, screen } from '@testing-library/react';
import mockData from '../../youtube-videos-mock';
import VideoCard from './index';

test('video thumbnail alt text', () => {
  render(
    <VideoCard snippet={mockData.items[1].snippet} channelInfo={mockData.items[0]} />
  );

  const result = screen.getByAltText(/video thumbnail/i);
  expect(result).toBeInTheDocument();
});

test('video title', () => {
  render(
    <VideoCard snippet={mockData.items[1].snippet} channelInfo={mockData.items[0]} />
  );

  const result = screen.getByText(mockData.items[1].snippet.title);
  expect(result).toBeInTheDocument();
});

test('video thumbnail src', () => {
  render(
    <VideoCard snippet={mockData.items[1].snippet} channelInfo={mockData.items[0]} />
  );

  const img = screen.getAllByRole('img');
  expect(img[0]).toHaveAttribute('src', mockData.items[1].snippet.thumbnails.medium.url);
});

test('channel thumbnail src', () => {
  render(
    <VideoCard snippet={mockData.items[1].snippet} channelInfo={mockData.items[0]} />
  );

  const img = screen.getAllByRole('img');
  expect(img[1]).toHaveAttribute('src', mockData.items[0].snippet.thumbnails.default.url);
});

test('channel thumbnail alt text', () => {
  render(
    <VideoCard snippet={mockData.items[1].snippet} channelInfo={mockData.items[0]} />
  );

  const result = screen.getByAltText(/channel thumbnail/i);
  expect(result).toBeInTheDocument();
});

test('article element render', () => {
  render(
    <VideoCard snippet={mockData.items[1].snippet} channelInfo={mockData.items[0]} />
  );

  const result = screen.getByRole('article');
  expect(result).toBeInTheDocument();
});
