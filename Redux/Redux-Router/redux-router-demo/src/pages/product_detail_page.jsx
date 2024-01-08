import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetailPage() {
  const params =   useParams()
  const navigate = useNavigate();

  function navigationHandler() {
      navigate('/products')
  }
  return (
    <div>
        <h2>Your Product: {params.productId}</h2>
        <button onClick={navigationHandler}>Navigate to Product</button>
    </div>
  )
}

export default ProductDetailPage