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
  test('button renders with correct text', () => {
    render(<GoBackButton />)
    expect(screen.getByRole('button', { name: /go back/i })).toHaveTextContent(/go back/i)
  })
  test('click button', () => {
    render(<GoBackButton />)
    const button = screen.getByRole('button', { name: /go back/i })
    fireEvent.click(button)
    expect(button).toBeTruthy()
  })
})
