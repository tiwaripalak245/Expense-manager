import React, { useContext } from 'react'
import Navbar from './Navbar'
import BalanceSection from './BalanceSection'
import ExpenseSection from './ExpenseSection'
import ListGroup from './ListGroup'
import { BalanceProvider } from './BalanceContext'

const App = () => {

  
  return (
    <BalanceProvider>
      <Navbar />
      <div className="container p-3 my-5 bg-light-subtle">
<BalanceSection/>
<ExpenseSection/>
<ListGroup/>
      </div>
    </BalanceProvider>
  )
}

export default App
