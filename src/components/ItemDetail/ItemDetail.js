import React from 'react'
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({ product }) => {
  return (
    <div className="container-details">
      <div className="details" key={product.id}>
        <div className="big-img">
          <img src={product.image} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{product.name}</h2>
            <span>${product.price}</span>
          </div>
          <h5>{product.description}</h5>
          <p>{product.content}</p>
          <p>!Últimas {product.stock} unidades!</p>
          <b>Modelos disponibles:</b>
          <div className="thumb">
            <img src={product.image} alt="" />
            <img src={product.image2} alt="" />
            <img src={product.image3} alt="" />
          </div>
          <p>Indique el modelo deseado al realizar la compra</p>

          <button className="cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
