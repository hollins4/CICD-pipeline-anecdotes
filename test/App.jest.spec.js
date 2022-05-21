import React from 'react'
import { render } from '@testing-library/react'
//import axiosMock from 'axios'
//import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom/extend-expect'
import App from '../src/App'
//import AnecdotesList from '../src/components/AnecdotesList'



/*
describe('<App />', () => {
  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce(
      {
        data: {
          results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur', id: 1 }]
        }
      }
    )
    await act(async () => {
      render(<App />)
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=784')
  })
*/

describe('<App />', () => {

  test('Checks for components', () => {

    const component = render(
      <App />
    )

    console.log(component.container)
    expect(component.container).toHaveTextContent('Anecdotes')
  })

})

