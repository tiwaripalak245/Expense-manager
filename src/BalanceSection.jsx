import React, { useContext, useState , useEffect } from 'react'
import BalanceContext from './BalanceContext'

const BalanceSection = () => {


  const { transactions, dispatch, edit, dark} = useContext(BalanceContext)

  const [detail, setDetail] = useState("")
  const [amount, setAmount] = useState("")

  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(edit.editMode){

      dispatch({
        type : "UPDATE",
        payload : {
          id : edit.transaction.id,
          detail: detail,
          amount: +amount,

        }
      })
         
    }else{
      dispatch({
        type: "SAVE",
        payload: {
          id: crypto.randomUUID(),
       detail: detail,
       amount: +amount,
        }
      })
    }
    setDetail("")
    setAmount("")
  }

  useEffect(() => {
    setDetail(edit.transaction.detail)
    setAmount(edit.transaction.amount)
  },[edit]);

  return (
    <div className="balance-section ">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className={dark ? "card p-4 bg-light" : "card p-4 bg-dark"}>

            <form className={dark ? 'form-control rounded-0 bg-light' : 'form-control rounded-0 bg-dark'} onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter Your Transaction' onChange={(e) => 
              setDetail(e.target.value)} 
              value={detail} className="form-control my-3" />

              <input type="number" placeholder='Enter Amount' onChange={(e) => 
              setAmount(e.target.value)} 
              value={amount} className="form-control my-3" />
              
              <button className="btn btn-success w-50" onClick={handleSubmit}>Save</button>

            </form>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 ">
          <div className={dark? "card p-5 bg-light text-dark" : "card p-5 bg-dark text-light"}>
            <h1 className="card-title">Balance:</h1>
            <h1 className="display-4 text-success">{balance}</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceSection;
