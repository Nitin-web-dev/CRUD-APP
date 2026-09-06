import { useState } from 'react'

import TodoPage from './pages/TodoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='p-10'>
      <h2>enter your todo </h2>
      <TodoPage />
      </main>
    </>
  )
}

export default App
