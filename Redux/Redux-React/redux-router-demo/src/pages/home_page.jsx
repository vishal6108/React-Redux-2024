import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();

  function navigationHandler() {
      navigate('/products')
  }
  return (
    <div>
        <h2>HomePage</h2>
        <nav>
            <p>Jump to <Link to={'/products'}> List of Products</Link></p>
            <button onClick={navigationHandler}>Navigate to Product</button>
        </nav>
    </div>
  )
}

export default HomePage