import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { GoBackButton } from '../GoBackButton'
// import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    goBack: jest.fn(),
  }),
}))

describe('component back button', () => {
  test('button is render', () => {
    render(<GoBackButton />)
    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument()
  })
  test('click button', () => {
    // const onClick = jest.fn()

    render(<GoBackButton />)
    const button = screen.getByRole('button', { name: /go back/i })
    // const button = screen.getByText(/go back/i)
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })
})
