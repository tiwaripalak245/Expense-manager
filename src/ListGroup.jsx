import React, { useContext } from 'react'
import ListItem from './ListItem'
import BalanceContext from './BalanceContext'

const ListGroup = () => {

  const {transactions} = useContext(BalanceContext)
  return (
<ul className="list-group my-2 bg-light">

  {
    transactions.map(transaction=> <ListItem key={transaction.id} transaction={transaction}/>)
  }
</ul>
  )
}

export default ListGroup
