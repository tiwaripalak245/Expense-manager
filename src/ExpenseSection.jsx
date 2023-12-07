import React, { useContext } from 'react'
import BalanceContext from './BalanceContext'

const ExpenseSection = () => {

const {transactions, dark} = useContext(BalanceContext)

const income = transactions.filter((item) => item.amount > 0)
.reduce ((p,c) => p + c.amount, 0);

const expense = transactions.filter((item) => item.amount < 0) 
.reduce((p,c) => p + c.amount, 0); 



  return (
<div className="balance-section my-3">
    <div className="row gy-2 ">
<div className="col md-6 col-sm-12">
    <div className={dark? "card p-3 border-success bg-light text-dark" : "card p-3 border-success bg-dark text-light"}>
        <h4 className={dark ? "text-dark" : "text-light"}>Total Income</h4>
        <h3 className="text-success">{income}</h3>
    </div>

</div>

<div className="col md-6 col-sm-12">
    <div className={ dark ? "card p-3 border-danger bg-light text-dark" : "card p-3 border-danger bg-dark text-light"}>
        <h4 className="text-dark-bold">Total Expense</h4>
        <h3 className="text-danger">{expense}</h3>
    </div>

</div>
    </div>
</div>
  )
}

export default ExpenseSection
