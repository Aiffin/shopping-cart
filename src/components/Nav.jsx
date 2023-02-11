import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Nav() {
  const CartItem=useSelector(state=>state.cart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SHOPPING VILLA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink to={`/`} className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={`/cart`} className="nav-link">Cart</NavLink>
        </li>
        <li className="nav-item">Cart-item:{CartItem.length}</li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav