import { useState } from 'react'
import Budget from './pages/budget/BudgetPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 min-h-dvh'>
      <Budget/>
    </div>
  )
}

export default App
