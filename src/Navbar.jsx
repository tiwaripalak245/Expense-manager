import React, { useContext, useState } from 'react'
import BalanceContext from './BalanceContext'

const Navbar = () => {

  const {dark, dispatch} = useContext(BalanceContext)
const changeTheme = () => {
  if (dark) {
    dispatch({
      type: "LIGHT_MODE",
      payload: false
    })
  } else {
  dispatch({
    type: "DARK_MODE",
    payload: true,
  })
  }

}


  
  return (
    <nav className={dark? "navbar bg-light shadow-lg" : "navbar bg-dark shadow-lg"}>
  <div className="container-fluid">
    <span className={dark? "navbar-brand mb-0 h1 text-dark" : "navbar-brand mb-0 h1 text-light"}>Balance App Context</span>
    <span className="navbar-brand mb-0 h1">
        <button className={dark ? "btn btn-sm btn-outline-dark" : "btn btn-sm btn-outline-light"} onClick={() => changeTheme()}>{dark? "Dark mode" : "Light Mode"}</button>
    </span>

  </div>
</nav>
  )
}

export default Navbar
