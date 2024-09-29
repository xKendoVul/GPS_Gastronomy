import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card, Row, Col, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Envelope, Lock, Person, EyeFill, EyeSlashFill, Facebook, Google, Twitter } from 'react-bootstrap-icons';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && lastName && email && password && confirmPassword) {
      if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden.');
        return;
      }
      // Aquí iría la lógica de registro real
      console.log('Registrando con:', firstName, lastName, email, password);
      navigate('/'); // Redirigir al inicio después del registro
    } else {
      setError('Por favor, complete todos los campos.');
    }
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSocialRegister = (platform: string) => {
    // Aquí iría la lógica de registro con redes sociales
    console.log(`Registrando con ${platform}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4">Registrarse</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleRegister}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="registerFirstName">
                      <Form.Label>Nombre</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <Person />
                        </InputGroup.Text>
                        <Form.Control 
                          type="text" 
                          placeholder="Nombre" 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="registerLastName">
                      <Form.Label>Apellido</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <Person />
                        </InputGroup.Text>
                        <Form.Control 
                          type="text" 
                          placeholder="Apellido" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="registerEmail">
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

                <Form.Group className="mb-3" controlId="registerPassword">
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
                      onClick={() => togglePasswordVisibility('password')}
                    >
                      {showPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerConfirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Lock />
                    </InputGroup.Text>
                    <Form.Control 
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirmar Contraseña" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button 
                      variant="outline-secondary"
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                    >
                      {showConfirmPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <Button variant="warning" type="submit" className="w-100 mb-3">
                  Registrarse
                </Button>
              </Form>

              <div className="text-center mb-3">
                <span className="text-muted">O regístrate con</span>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <Button variant="outline-primary" className="me-2" onClick={() => handleSocialRegister('Facebook')}>
                  <Facebook />
                </Button>
                <Button variant="outline-danger" className="me-2" onClick={() => handleSocialRegister('Google')}>
                  <Google />
                </Button>
                <Button variant="outline-info" onClick={() => handleSocialRegister('Twitter')}>
                  <Twitter />
                </Button>
              </div>

              <p className="text-center mb-0">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;