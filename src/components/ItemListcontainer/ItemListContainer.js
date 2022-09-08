import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom' //usa los parametros de la URL

const items = [
  {
    id: 1,
    name: 'Gorra Natación silicona Arena',
    category: 'natacion',
    stock: 8,
    initial: 6,
    price: 1500,
    image: require('../../assets/img1.png'),
  },
  {
    id: 2,
    name: 'Máscara Snorkel Aletas Nat Geo Tuna 44 - Thuway',
    category: 'buceo',
    stock: 7,
    initial: 6,
    price: 250,
    image: require('../../assets/img2.png'),
  },
  {
    id: 3,
    name: 'Boardshort Printed Lb Splash Billabong Hombre',
    category: 'surf',
    stock: 5,
    initial: 6,
    price: 7000,
    image: require('../../assets/img3.png'),
  },
  {
    id: 4,
    name: 'Gorro Natación silicona diseño Bubble Speedo Unisex',
    category: 'natacion',
    stock: 6,
    initial: 6,
    price: 250,
    image: require('../../assets/img4.png'),
  },
  {
    id: 5,
    name: 'Aletas Snorkel silicona Marfed',
    category: 'buceo',
    stock: 6,
    initial: 6,
    price: 2500,
    image: require('../../assets/img5.png'),
  },
  {
    id: 6,
    name: "Tablas De Surf Soft Pro Shockn 6' 0'",
    category: 'surf',
    stock: 5,
    initial: 6,
    price: 59000,
    image: require('../../assets/img6.png'),
  },
  {
    id: 7,
    name: 'Gafas Natación Marfed antiempañe ',
    category: 'natacion',
    stock: 10,
    initial: 6,
    price: 250,
    image: require('../../assets/img7.png'),
  },
  {
    id: 8,
    name: 'Malla Natación Speedo Splice Enteriza',
    category: 'natacion',
    stock: 5,
    initial: 6,
    price: 250,
    image: require('../../assets/img8.png'),
  },
  {
    id: 9,
    name: 'Antiparras Speedo Sea Squad Skoogle Junior Pink',
    category: 'natacion',
    stock: 5,
    initial: 6,
    price: 250,
    image: require('../../assets/img9.png'),
  },
  {
    id: 10,
    name: 'Malla natación Speedo Gala Logo Medalist',
    category: 'natacion',
    stock: 4,
    initial: 6,
    price: 250,
    image: require('../../assets/img10.png'),
  },
  {
    id: 11,
    name: 'Tabla Wakeboard Lancha Liquid Force New Trip Botas Index',
    category: 'surf',
    stock: 2,
    initial: 6,
    price: 99000,
    image: require('../../assets/img11.png'),
  },
  {
    id: 12,
    name: 'Remera Thermoskin de Neoprene Manga corta Mujer',
    category: 'buceo',
    stock: 5,
    initial: 6,
    price: 250,
    image: require('../../assets/img12.png'),
  },
]

const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    const getProduct = new Promise((res) => {
      setTimeout(() => {
        setLoading(true)
        res(items)
      }, 2000) 
    })
    if (categoryId) {
      getProduct.then((res) =>
        setProduct(res.filter((item) => item.category === categoryId)),
        )
    } else {
      getProduct.then((res) => setProduct(res)) //Si no hay solicitud de categoria se muestra todo
    }
  }, [categoryId]) //cada vez que cambia la categoria debe montarse el useEffect


  return (
    <div className="body">
      <div className="item-list">
        <h1>{greeting}</h1>
      </div>
      <div className="contain">
        <div className="text">
          <h3 className="newarrival">NEW ARRIVALS</h3>
          <span className="onlineorder">
            <h2>
              30% OFF <br />
              Compra Online
            </h2>
          </span>
        </div>
      </div>
      
      <div className="itemContainer">
        {!loading ? <div className='spinner'><CircularProgress /></div> : <ItemList product={product} />}
      </div>
    </div>
  )
}

export default ItemListContainer
