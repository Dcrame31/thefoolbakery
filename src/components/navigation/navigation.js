import React from 'react'
import { Link } from 'react-router-dom';

function navigation() {
  return (
    <nav>
        <Link to="/">Menu</Link>
        <Link to="/order">Order</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

    </nav>

  )
}

export default navigation