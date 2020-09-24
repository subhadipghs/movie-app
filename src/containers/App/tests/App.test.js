import '@testing-library/jest-dom'
import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from '../App'

afterEach(() => cleanup())

/*
  📺 Test the title of the App
*/

test('renders app', () => {
  const { getByText } = render(<App />)
  expect(getByText(/Movie name/i)).toBeInTheDocument();
})
