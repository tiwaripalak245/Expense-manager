import React, { useContext, useEffect } from 'react'
import BalanceContext from './BalanceContext'

const ListItem = ({transaction}) => {

  const {dispatch, dark} = useContext(BalanceContext)

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload : id,
    })
  }



const editTransaction = (oldTransaction) => {
  dispatch({
    type : "EDIT",
    payload : oldTransaction
  })
}


  return (
<li className={dark ? 'list-group-item my-2 d-flex align-item-center justify-content-between bg-light' : 'list-group-item my-2 d-flex align-item-center justify-content-between bg-dark'}>
    <span>
        <h3 className={transaction.amount > 0 ? "text-success" : "text-danger"}>{transaction.amount}</h3>
        <h4 className="text-secondary">{transaction.detail}</h4>
    </span>

    <span>
        <button className="btn btn-warning" onClick={()=> editTransaction(transaction)}>Edit</button>
        <button className="btn btn-danger mx-2" onClick={() => handleDelete(transaction.id)}>Delete</button>

    </span>
</li>
  )
}

export default ListItem
