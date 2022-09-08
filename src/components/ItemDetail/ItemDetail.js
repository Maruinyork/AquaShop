import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product }) => {
  const{id, image, image2, image3, name, price, description, content, stock} = product
  
  const[toCart, setToCart] = useState(false);
 

  const onAdd = (quantity)=>{
      setToCart(true);
  }


  return (
    <div className="container-details">
      <div className="details" key={id}>
        <div className="big-img">
          <img src={image} alt="" className='mainImg' />
        </div>

        <div className="box">
          <div className="row">
            <h2>{name}</h2>
            <span>${price}</span>
          </div>
          <h5>{description}</h5>
          <p>{content}</p>
          <p>!Últimas {stock} unidades!</p>
          <b>Modelos disponibles:</b>
          <div className="thumb">
            <img src={image} alt=''  />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
          </div>
          <p>Indique el modelo deseado al realizar la compra</p>
          <div className="counter">
            {toCart ? <Link to='/cart' className='toCart'> Finalizar compra </Link> : 
            <ItemCount stock={5} initial={1} onAdd={onAdd}/> } {/*Le paso por props el stock y la cantidad inicial*/} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
