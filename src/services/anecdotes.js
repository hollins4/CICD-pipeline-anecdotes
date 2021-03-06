
let anecdotes = [
  {
    'content': 'If it hurts, do it more often',
    'id': '47145',
    'votes': 4
  },
  {
    'content': 'Adding manpower to a late software project makes it later!',
    'id': '21149',
    'votes': 4
  },
  {
    'content': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'id': '69581',
    'votes': 4
  },
  {
    'content': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'id': '36975',
    'votes': 4
  },
  {
    'content': 'Premature optimization is the root of all evil.',
    'id': '25170',
    'votes': 4
  },
  {
    'content': 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'id': '98312',
    'votes': 5
  },
  {
    'content': 'This is a new day!',
    'votes': 9,
    'id': 'ngfGBft'
  }
]

const getAll = async () => {
  //const response = await axios.get(baseUrl)
  return anecdotes   //response.data
}

const createNew = async (content) => {
  let id = Math.random() * 10000
  const anecdote = { content, votes: parseInt(0), id: id }
  anecdotes = anecdotes.concat(anecdote)
  return anecdote
}

const incVote = async (id, content) => {
  console.log(content)
  const anecdote = anecdotes.find( anecdote => anecdote.id === id)
  anecdote.votes += 1
  anecdotes = anecdotes.filter(a => a.id !== id ? a : anecdote)
  //const addVote = { ...content, votes: content.votes + 1 }
  //const response = await axios.put(`${baseUrl}/${id}`, addVote)
  return anecdote
}

export default { getAll, createNew, incVote }