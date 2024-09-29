import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card, Row, Col, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Facebook, Google, Twitter, Envelope, Lock, EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      // Aquí iría la lógica de autenticación real
      console.log('Iniciando sesión con:', email, password);
      navigate('/'); // Redirigir al inicio después del login
    } else {
      setError('Por favor, ingrese su correo electrónico y contraseña.');
    }
  };

  const handleSocialLogin = (platform: string) => {
    // Aquí iría la lógica de autenticación con redes sociales
    console.log(`Iniciando sesión con ${platform}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="loginEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Envelope />
                    </InputGroup.Text>
                    <Form.Control 
                      type="email" 
                      placeholder="Ingrese su correo" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Lock />
                    </InputGroup.Text>
                    <Form.Control 
                      type={showPassword ? "text" : "password"}
                      placeholder="Contraseña" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 mb-3">
                  Iniciar Sesión
                </Button>
              </Form>

              <div className="text-center mb-3">
                <span className="text-muted">O inicia sesión con</span>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <Button variant="outline-primary" className="me-2" onClick={() => handleSocialLogin('Facebook')}>
                  <Facebook />
                </Button>
                <Button variant="outline-danger" className="me-2" onClick={() => handleSocialLogin('Google')}>
                  <Google />
                </Button>
                <Button variant="outline-info" onClick={() => handleSocialLogin('Twitter')}>
                  <Twitter />
                </Button>
              </div>

              <p className="text-center mb-0">
                ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;