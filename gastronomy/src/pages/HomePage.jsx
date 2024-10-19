import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import {Facebook, Instagram, Twitter, Tiktok, Whatsapp, ArrowRight } from 'react-bootstrap-icons';
import logooficial from './media/logooficial.png'
import nacatamal1 from './media/nacatamal1.png'
import vigoron from './media/vigoron.jpg'
import carne_asada from './media/carne_asada.jpeg'
import sopa_mondongo from './media/sopa_mondongo.jpg'
import carusel1 from './media/carusel1.png'
import carusel2 from './media/carusel2.png'

const featuredProducts = [
  { id: 1, name: 'Nacatamal', price: 60, rating: 4.5, image: nacatamal1 },
  { id: 2, name: 'Vigorón', price: 150, rating: 4.8, image: vigoron },
  { id: 3, name: 'Carne Asada', price: 200, rating: 4.2, image: carne_asada },
  { id: 4, name: 'Sopa de Mondongo', price: 200, rating: 4.7, image: sopa_mondongo }
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logooficial}
              width="120"
              height="60"
              className="d-inline-block align-top me-2"
              alt="GPS Gastronomy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/events">Eventos</Nav.Link>
              <Nav.Link as={Link} to="/categories">Categorías</Nav.Link>
              <Nav.Link as={Link} to="/premium">Premium</Nav.Link>
              <Nav.Link as={Link} to="/contacts">Contactanos</Nav.Link>
              <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <Container className="py-5">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} className="mb-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carusel1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={carusel2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>

          <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
            <h2 className="mb-0 w-100 text-center">Platillos Destacados</h2>
            <Button variant="outline" className="d-flex align-items-center position-absolute end-0">
              Ver Todo <ArrowRight className="ms-2" />
            </Button>
          </div>
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} md={3} className="mb-4">
                <Link to={`/product/${product.id}`} className="text-decoration-none">
                  <Card className="hover-float">
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        C$ {product.price}.00
                      </Card.Text>
                      <StarRating rating={product.rating} />
                      <Button variant="warning" className="mt-2 w-100">Ver Oferta</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
            <h2 className="mb-0 w-100 text-center">Platillos más consumidos</h2>
            <Button variant="outline" className="d-flex align-items-center position-absolute end-0">
              Ver Todo <ArrowRight className="ms-2" />
            </Button>
          </div>
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} md={3} className="mb-4">
                <Link to={`/product/${product.id}`} className="text-decoration-none">
                  <Card className="hover-float">
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        C$ {product.price}.00
                      </Card.Text>
                      <StarRating rating={product.rating} />
                      <Button variant="warning" className="mt-2 w-100">Ver Oferta</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-between align-items-center mb-4 position-relative">
            <h2 className="mb-0 w-100 text-center">Platillos Premium</h2>
            <Button variant="outline" className="d-flex align-items-center position-absolute end-0">
              Ver Todo <ArrowRight className="ms-2" />
            </Button>
          </div>
          <Row>
            {featuredProducts.map((product) => (
              <Col key={product.id} md={3} className="mb-4">
                <Link to={`/product/${product.id}`} className="text-decoration-none">
                  <Card className="hover-float">
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        C$ {product.price}.00
                      </Card.Text>
                      <StarRating rating={product.rating} />
                      <Button variant="warning" className="mt-2 w-100">Ver Oferta</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer className="bg-warning py-4 text-dark">
        <Container>
          <Row>
            <Col md={6}>
              <h5>GPS Gastronomy</h5>
              <p>Tu destino para experiencias gastronómicas únicas</p>
            </Col>
            <Col md={6}>
              <h5>Contacto</h5>
              <p>Email: gpsgastronomy.com</p>
              <p>Teléfono: (505) 8624-5593</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h5>Síguenos</h5>
              <div className="d-flex">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                  <Facebook size={24} />
                  <span className="visually-hidden">Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                  <Instagram size={24} />
                  <span className="visually-hidden">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                  <Twitter size={24} />
                  <span className="visually-hidden">Twitter</span>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
                  <Tiktok size={24} />
                  <span className="visually-hidden">TikTok</span>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <Whatsapp size={24} />
                  <span className="visually-hidden">WhatsApp</span>
                </a>
              </div>
            </Col>
          </Row>
          <Col>
            <p className="text-center">© Copyright 2024 GPS Gastronomy Inc</p>
          </Col>
        </Container>
      </footer>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .hover-float {
            transition: box-shadow 0.3s ease-in-out;
          }
          .hover-float:hover {
            animation: float 2s ease-in-out infinite;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
        `}
      </style>
    </div>
  );
}