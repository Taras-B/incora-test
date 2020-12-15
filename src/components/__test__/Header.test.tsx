import React from 'react'
import { render, screen } from '@testing-library/react'

import { Header } from '../Header'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { BrowserRouter } from 'react-router-dom'
// import userEvent from '@testing-library/user-event'

describe('component Header', () => {
  test('should be correct render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
    // screen.debug()
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    // expect(screen.getByText(/home/i).textContent).toMatch('Home')
  })
})
