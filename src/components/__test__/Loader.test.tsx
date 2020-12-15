import React from 'react'
import { render, screen } from '@testing-library/react'

import { Loader } from '../Loader'
// import userEvent from '@testing-library/user-event'

describe('component Loader', () => {
  test('Loader is correct render', () => {
    render(<Loader />)
    // screen.debug()
    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.getByTestId('loader')).toHaveClass('MuiGrid-grid-xs-12')
    expect(screen.getByTestId('loader')).toHaveClass('MuiGrid-container')
    expect(screen.getByTestId('loader')).toHaveClass('MuiGrid-item')
  })
})
