import anecdoteService from '../services/anecdotes'

/*
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
*/


const anecdoteReducer = (state = [], action) => {

  switch(action.type) {
  case 'VOTE': {
    /*
    const id = action.data.id
    const anecdoteToChange = state.find(anecdote => anecdote.id === id)
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1
    }
    return state.map( anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    */
    const updatedAnecdote = action.data
    return state.map( anecdote => anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote)
  }
  case 'ADD_ANECDOTE': {
    return [...state, action.data]
  }
  case 'INIT_ANECDOTE': {
    return action.data
  }
  default:
    return state
  }
}

export const addVote = (id, content) => {
  console.log(content)
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.incVote(id, content)
    /*
    dispatch({
      type: 'VOTE',
      data: { id }
    })
    */
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer