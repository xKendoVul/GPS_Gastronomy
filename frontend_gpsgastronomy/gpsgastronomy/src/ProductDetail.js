import React from 'react';
import { Container, Row, Col, Image, Button, Card, Carousel } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Cart, Trash, CreditCard } from 'react-bootstrap-icons';
import nacatamal1 from './media/nacatamal1.png'
import vigoron from './media/vigoron.jpg'
import carne_asada from './media/carne_asada.jpeg'
import sopa_mondongo from './media/sopa_mondongo.jpg'

// Datos de ejemplo para el producto y productos relacionados
const product = {
  id: 1,
  name: 'Nacatamal',
  price: 60,
  description: 'El Nacatamal es un platillo tradicional nicaragüense, hecho de masa de maíz rellena de carne de cerdo, arroz, papas, y envuelto en hojas de plátano.',
  image: nacatamal1,
  restaurants: [
    { name: 'Comedor Doña Juanita', location: { lat: 12.136389, lng: -86.251389 } },
    { name: 'Fritanga la negrita', location: { lat: 12.148889, lng: -86.273889 } },
    { name: 'El Porche', location: { lat: 12.125556, lng: -86.268889 } },
  ]
};

const relatedProducts = [
  { id: 2, name: 'Vigorón', price: 150, image: vigoron },
  { id: 3, name: 'Carne Asada', price: 200, image: carne_asada },
  { id: 4, name: 'Sopa de Mondongo', price: 200, image: sopa_mondongo },
];

const mapContainerStyle = {
  width: '100%',
  height: '600px'
  
};

const center = {
  lat: 12.136389,
  lng: -86.251389
};

function ProductDetailPage() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h3 className="text-dark">C$ {product.price}.00</h3>
          <p>{product.description}</p>
          <div className="d-flex gap-2 mb-3">
            <Button variant="success" size="sm">
              <Cart className="me-1" /> Agregar a compras
            </Button>
            <Button variant="danger" size="sm">
              <Trash className="me-1" /> Eliminar compras
            </Button>
            <Button variant="warning" size="sm">
              <CreditCard className="me-1" /> Comprar ahora
            </Button>
          </div>
        </Col>
      </Row>

      <h3 className="text-center">Productos relacionados</h3>
      <Carousel>
        {relatedProducts.map((relatedProduct, index) => (
          <Carousel.Item key={relatedProduct.id}>
            <Row>
              <Col md={12} className="text-center">
                <Image src={relatedProduct.image} alt={relatedProduct.name} fluid />
                <h5>{relatedProduct.name}</h5>
                <p>C$ {relatedProduct.price}.00</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3 className="mt-5 mb-3">Restaurantes que ofrecen este platillo</h3>
      <Row>
        {product.restaurants.map((restaurant, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-5 mb-3">Ubicación de los restaurantes</h3>
      <LoadScript googleMapsApiKey="AIzaSyANTYQgrOqjNIDgCKidePcnw_wwH_SZGL0">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          md={50}
          center={center}
          zoom={13}
        >
          {product.restaurants.map((restaurant, index) => (
            <Marker key={index} position={restaurant.location} />
          ))}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
}

export default ProductDetailPage;