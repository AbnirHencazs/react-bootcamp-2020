import React from 'react'
import {render, screen} from '@testing-library/react'

import Navbar from './index'

test('serch input', () => {
    render(<Navbar/>);

    const result = screen.getByPlaceholderText(/Search/i)
    expect(result).toBeInTheDocument();
})

test('render nav bar', () => {
    render(<Navbar/>);

    const result = screen.getByRole('navigation')
    expect(result).toBeInTheDocument()
    expect(result).toHaveClass("flex flex-column w-100 justify-center md:justify-between px-5 py-5 bg-blue-300 mb-3")
    expect(result).toBeVisible()
})
