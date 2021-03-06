import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdotesForm'
import AnecdoteList from './components/AnecdotesList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import './styles.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(initializeAnecdotes())
  }, [dispatch])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App