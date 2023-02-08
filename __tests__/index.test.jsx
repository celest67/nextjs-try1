// __tests__/index.test.jsx

import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: /this is 0/i })).toBeInTheDocument()

    const addButton = screen.getByRole('button', {  name: /add/i})

    fireEvent.click(addButton)

    expect(screen.getByRole('heading', { name: /this is 1/i })).toBeInTheDocument()

    fireEvent.click(addButton)

    expect(screen.getByRole('heading', { name: /this is 2/i })).toBeInTheDocument()

  })
})