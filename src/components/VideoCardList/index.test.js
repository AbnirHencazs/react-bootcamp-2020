import React from 'react';
import { render, screen } from '@testing-library/react';
import {items} from '../../youtube-videos-mock';
import { server } from '../../mocks/server';
import { renderHook } from '@testing-library/react-hooks';
import useMsw from '../../hooks/useMsw';
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

describe("VideoCardList component", () => {
  beforeAll( () => server.listen() )
  afterEach( () => server.resetHandlers() )
  afterAll( () => server.close() )

  test("Obtain videos from msw and render them in VideoCardList component", async () => {
    const response = await fetch("/videos")
    const data = await response.json()

    render(<VideoCardList videos={data.mockData.items} channel={data.mockData.items[0]}/>)
    const VideoCardListComponent = screen.getByTestId("VideoCardList")

    expect( VideoCardListComponent ).toBeInTheDocument

    const VideoCards = screen.getAllByRole("article")
    expect( VideoCards.length ).toBeGreaterThanOrEqual(24)
  })

  test("Obtain videos from mws using useGapi custom hooks and render them in VideoCardList component", async () => {
    const { result, waitForNextUpdate } = renderHook( () => useMsw("/videos") )

    result.current.getVideos()
    await waitForNextUpdate()

    render( <VideoCardList
              videos={result.current.videos}
              channel={result.current.videos[0]}/> )

    const VideoCardListComponent = screen.getByTestId("VideoCardList")
    expect( VideoCardListComponent ).toBeInTheDocument()

    const videoCards = screen.getAllByRole("article")
    expect( videoCards.length ).toBeGreaterThanOrEqual(24)
  })
}) 
