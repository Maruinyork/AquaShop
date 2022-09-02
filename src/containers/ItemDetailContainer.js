import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const items =  [
{
    id: 1,
    name: 'Gorra Natación Arena',
    category: 'natacion',
    stock: 8,
    initial: 6,
    price: 1500,
    description: "Gorras de natación de silicona arena Print 2",
    content: 'Las gorras son 100% estampadas con coloridos y atractivos diseños para combinar con tu outfit para el natatorio. Gracias a la silicona, proporcionan mayor hidrodinámica y además protegen tu cabello contra el daño del cloro. Extendé la vida útil de tu gorra de silicona enjuagándola en agua dulce después de cada uso y secándola al aire libre a la sombra.',
    image: require('../../src/assets/img1.png'),
    image2: require('../../src/assets/img1-2.png'),
    image3: require('../../src/assets/img1-3.png'),
  },
  {
    id: 2,
    name: 'Máscara Snorkel Aletas Nat Geo Tuna 44 - Thuway',
    category: 'buceo',
    stock: 7,
    initial: 6,
    price: 250,
    description: 'Combo snorkeler: aletas, mascara + snorkel by National Geographic',
    content: "Los lentes poseen vidrio templado y un marco liviano. Correa de ajuste a la máscara flexible y reemplazable. El Snorkel tiene protección contra salpicaduras y un tubo ancho para mayor facilidad de desplazamiento de aire. La boquilla es de silicona con diseño de ortodoncia para el máximo confort.",
    image: require('../../src/assets/img2.png'),
    image2: require('../../src/assets/img2-1.jpg'),
    image3: require('../../src/assets/img2-2.jpg'),
  },
  {
    id: 3,
    name: 'Boardshort Printed Lb Splash Billabong Hombre',
    category: 'surf',
    stock: 5,
    initial: 6,
    price: 7000,
    description: "Short de baño",
    content: 'Esta prenda es Ideal para tus días de playa, siendo una malla de secado rápido y versátil. También la podes usar de noche, por ejemplo, combiándola con una camisa hawaiana. Posee cintura elástica y cordón. Es de tela Spandex para otorgar mayor comodidad y mejor movilidad. Posee bolsillos laterales y bolsillo trasero en lado derecho. Su confección es de 90% Poliéster reciclado 10% Spandex.',
    image: require('../../src/assets/img3.png'),
    image2: require('../../src/assets/img3-1.jpg'),
    image3: require('../../src/assets/img3-2.jpg'),
  },
  {
    id: 4,
    name: 'Gorro Natación silicona Bubble Speedo',
    category: 'natacion',
    stock: 6,
    initial: 6,
    price: 250,
    description: "Gorras de natación de silicona",
    content: 'Con diseño de burbujas que la hace ideal para aguas de baja temperatura. Posee excelente calce y confort. Impermeable de secado rápido. Composición: 100% Silicona.',
    image: require('../../src/assets/img4.png'),
    image2: require('../../src/assets/img4-1.jpg'),
    image3: require('../../src/assets/img4-2.jpg'),
  },
  {
    id: 5,
    name: 'Aletas Snorkel silicona Marfed',
    category: 'buceo',
    stock: 6,
    initial: 6,
    price: 2500,
    description: "Aleta de Aqua Marfed ajustable de talón abierto",
    content: 'Calzado ergonómico que sigue la forma del pie. Ha sido diseñada para usar descalzo o con media fina. Ideal para realizar snorkeling. El calzante está provisto con agujeros que mejoran la hidrodinámica del producto.',
    image: require('../../src/assets/img5.png'),
    image2: require('../../src/assets/img5-1.jpg'),
    image3: require('../../src/assets/img5-2.jpg'),
  },
  {
    id: 6,
    name: "Tablas De Surf Soft Pro Shockn 6' 0'",
    category: 'surf',
    stock: 5,
    initial: 6,
    price: 59000,
    description: "Tabla De Surf Soft Shockn Blue modelo Cloud 6' 0' Reforzada",
    content: "Tabla de softboard. Ideal para principiantes hasta nivel intermedio.MEDIDA 6'0' DE ALTO X 21 5/8 DE ANCHO X 2 3/4 DE ESPESOR ( 176 CM X 54 CM X 7 CM).TRI FIN (Incluye quillas). Refuerzo interno con alma. Refuerzo del botom con lamina de mesh. COLOR AZUL EN DECK Y VERDE FLUO CON MESH EN EL BOTTOM.",
    image: require('../../src/assets/img6.png'),
    image2: require('../../src/assets/img6-1.jpg'),
    image3: require('../../src/assets/img6-2.jpg'),
  },
  {
    id: 7,
    name: 'Gafas Natación Marfed antiempañe',
    category: 'natacion',
    stock: 10,
    initial: 6,
    price: 250,
    description: "Antiparras Natación Marfed Tamesis Silicona Anti Fog Ajustable Pileta Antiempañante",
    content: 'Excelentes antiparras marca Marfed, especialistas en la materia. Silicona 100% con tratamiento Antifog espejadas con puentes intercambiables de diferentes medidas. Fabricados en una sola pieza de silicona. Son regulables. Certificado por CADDA (Confederación Argentina de Deportes Acuáticos).',
    image: require('../../src/assets/img7.png'),
    image2: require('../../src/assets/img7-1.jpg'),
    image3: require('../../src/assets/img7-2.jpg'),
  },
  {
    id: 8,
    name: 'Malla Natación Speedo Splice Thinstrap Racerback Enteriza',
    category: 'natacion',
    stock: 5,
    initial: 6,
    price: 250,
    description: "Trajes de baño",
    content: 'Malla de natación con tecnología Endurance10 con Creora Highclo que brinda mayor resistencia al cloro que el elastano estándar. Con protección solar a rayos UVA y UVB. Composición: 80% Poliamida 20% Elastano Highclo.',
    image: require('../../src/assets/img8.png'),
    image2: require('../../src/assets/img8-1.png'),
    image3: require('../../src/assets/img8-2.png'),
  },
  {
    id: 9,
    name: 'Antiparras Speedo Sea Squad Skoogle Junior',
    category: 'natacion',
    stock: 5,
    initial: 6,
    price: 250,
    description: "Antiparras de armazón suave y flexible de una sola pieza. Juntas y tira hipoalergénicas de ajuste sencillo.",
    content: 'Composición: Lente: Policarbonato, Sellado: Silicona, Tira: Silicona. Filtro contra rayos UV. Anti Fog, no se empañan. Antiparras de fácil ajuste.',
    image: require('../../src/assets/img9.png'),
    image2: require('../../src/assets/img9-1.jpg'),
    image3: require('../../src/assets/img9-2.jpg'),
  },
  {
    id: 10,
    name: 'Malla natación Speedo Gala Logo Medalist',
    category: 'natacion',
    stock: 4,
    initial: 6,
    price: 250,
    description: "Trajes de baño",
    content: 'Malla de natación Speedo enteriza abierta en la espalda con monograma y logo impreso en el frente. Tecnología Endurance10 con Creora Highclo que brinda mayor resistencia al cloro que el elastano estandar. Con protección solar UPF 50+. Composición: 80% Poliamida 20% Elastano Highclo.',
    image: require('../../src/assets/img10.png'),
    image2: require('../../src/assets/img10-1.png'),
    image3: require('../../src/assets/img10-2.png'),
  },
  {
    id: 11,
    name: 'Tabla Wakeboard Lancha Liquid Force New Trip Botas Index',
    category: 'surf',
    stock: 2,
    initial: 6,
    price: 99000,
    description: "Equipo de wakeboard + botas",
    content: 'wakeboard para principiantes a internos intermedios. Tiene un balancín continuo, aletas moldeadas y un núcleo sólido. Conozca nuestro arco continuo de balancín para paseos rápidos y suaves y para girar más fácilmente. Armado con las aletas integradas para mejorar la tarjeta su apretón en el agua ella le tomará sky-high. Ajustables con cordón. Lengüeta de EVA forrada',
    image: require('../../src/assets/img11.png'),
    image2: require('../../src/assets/img11-1.jpg'),
    image3: require('../../src/assets/img11-2.jpg'),
  },
  {
    id: 12,
    name: 'Remera Thermoskin de Neoprene Manga corta Mujer',
    category: 'buceo',
    stock: 5,
    initial: 6,
    price: 250,
    description: "Trajes buceo y surf",
    content: 'Altamente recomendada para natación y otros deportes acuáticos. En cuello y cintura se aplica T- Grip para evitar ingreso de agua por el cuello y levantadas en el área de la cintura por presión de agua. La más fina y liviana protección contra el viento, radiación UV y raspaduras. Construida en combinación de neoprene Metalite y T-Flex, más panel lateral en Xtraflex. Sensación de segunda piel. Construida en costura Flatlock. Bajo mangas en dryskin para mínima fricción y libertad de movimiento. Cierre delantero.',
    image: require('../../src/assets/img12.png'),
    image2: require('../../src/assets/img12-1.jpg'),
    image3: require('../../src/assets/img12-2.jpg'),
  },
];

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {itemId} = useParams();

  useEffect(()=>{ //Se hara una petición al montarse
    const getProduct = new Promise(res => {
        setTimeout(() => {
            res(items);
        }, 2000); 
    });

    getProduct.then(res => setProduct(res.find(item=>item.id === parseInt(itemId))));
  }, [itemId])

  return (
   <ItemDetail product={product} />
  );
}

export default ItemDetailContainer;
