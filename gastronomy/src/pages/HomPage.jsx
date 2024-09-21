import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import { Cart, Facebook, Instagram, Twitter, Tiktok, Whatsapp } from 'react-bootstrap-icons';
import logo_gg from './media/logo_gg.png'
import nacatamal1 from './media/nacatamal1.png'
import vigoron from './media/vigoron.jpg'
import carne_asada from './media/carne_asada.jpeg'
import sopa_mondongo from './media/sopa_mondongo.jpg'

function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo_gg}
              width="100"
              height="100"
              className="d-inline-block align-top me-2"
              alt="GastroShop Logo"
            />
            GPS Gastronomy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#restaurantes">Restaurantes</Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#carrito">
                <Cart size={20} /> Mi carrito
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <Container className="py-5">
          <Row className="mb-5">
            <Col>
              <h1 className="text-center mb-4">Bienvenid@s a GPS Gastronomy</h1>
              <p className="text-center">Descubre los mejores platillos de la gastronomía Nicaraguense</p>
            </Col>
          </Row>

          <h2 className="text-center mb-4">Platillos Destacados</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={nacatamal1}
                  alt="nacatamal"
                />
                <Card.Body>
                  <Card.Title>Nacatamal</Card.Title>
                  <Card.Text>
                    C$ 60.00
                  </Card.Text>
                  <StarRating rating={4.5} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={vigoron}
                  alt="vigoron"
                />
                <Card.Body>
                  <Card.Title>Vigoron</Card.Title>
                  <Card.Text>
                    C$ 150. 00
                  </Card.Text>
                  <StarRating rating={4.8} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={carne_asada}
                  alt="carne asada"
                />
                <Card.Body>
                  <Card.Title>Carne Asada</Card.Title>
                  <Card.Text>
                    C$ 200.00
                  </Card.Text>
                  <StarRating rating={4.2} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={sopa_mondongo}
                  alt="sopa de mondongo"
                />
                <Card.Body>
                  <Card.Title>Sopa de Mondongo</Card.Title>
                  <Card.Text>
                    C$ 200. 00
                  </Card.Text>
                  <StarRating rating={4.7} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h2 className="text-center mb-4">Platillos más Consumidos</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={nacatamal1}
                  alt="nacatamal"
                />
                <Card.Body>
                  <Card.Title>Nacatamal</Card.Title>
                  <Card.Text>
                    C$ 60.00
                  </Card.Text>
                  <StarRating rating={4.5} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={vigoron}
                  alt="vigoron"
                />
                <Card.Body>
                  <Card.Title>Vigoron</Card.Title>
                  <Card.Text>
                    C$ 150. 00
                  </Card.Text>
                  <StarRating rating={4.8} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={carne_asada}
                  alt="carne asada"
                />
                <Card.Body>
                  <Card.Title>Carne Asada</Card.Title>
                  <Card.Text>
                    C$ 200.00
                  </Card.Text>
                  <StarRating rating={4.2} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={sopa_mondongo}
                  alt="sopa de mondongo"
                />
                <Card.Body>
                  <Card.Title>Sopa de Mondongo</Card.Title>
                  <Card.Text>
                    C$ 200. 00
                  </Card.Text>
                  <StarRating rating={4.7} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h2 className="text-center mb-4">Platillos Premium</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={nacatamal1}
                  alt="nacatamal"
                />
                <Card.Body>
                  <Card.Title>Nacatamal</Card.Title>
                  <Card.Text>
                    C$ 60.00
                  </Card.Text>
                  <StarRating rating={4.5} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={vigoron}
                  alt="vigoron"
                />
                <Card.Body>
                  <Card.Title>Vigoron</Card.Title>
                  <Card.Text>
                    C$ 150. 00
                  </Card.Text>
                  <StarRating rating={4.8} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={carne_asada}
                  alt="carne asada"
                />
                <Card.Body>
                  <Card.Title>Carne Asada</Card.Title>
                  <Card.Text>
                    C$ 200.00
                  </Card.Text>
                  <StarRating rating={4.2} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card>
                <Card.Img 
                  variant="top" 
                  src={sopa_mondongo}
                  alt="sopa de mondongo"
                />
                <Card.Body>
                  <Card.Title>Sopa de Mondongo</Card.Title>
                  <Card.Text>
                    C$ 200. 00
                  </Card.Text>
                  <StarRating rating={4.7} />
                  <Button variant="primary" className="mt-2 w-100">Añadir al carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="bg-light py-4">
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
            <Col>
            <p className="text-center">Copyright 2024 GPS Gastronomy Inc</p>
            </Col>
          </Row>
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
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <Twitter size={24} />
                <span className="visually-hidden">Twitter</span>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="me-3 mb-2 text-dark">
                <Tiktok size={24} />
                <span className="visually-hidden">TikTok</span>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="mb-2 text-dark">
                <Whatsapp size={24} />
                <span className="visually-hidden">WhatsApp</span>
                </a>
            </div>
            </Col>
        </Container>
      </footer>
    </div>
  );
}

export default HomePage;