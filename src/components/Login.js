import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/images/logo.png';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/objetivos');
  };

  return (
    <div className="login-container">
      <div className="top-bar">
        <img src={logo} alt="Logo Banese" className="logo" />
      </div>
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <div className="form-container">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Usuário"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Senha"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="forgot-password-container">
              <a href="#" className="forgot-password-button">
                Esqueci Minha Senha
              </a>
            </div>

            <div className="login-button-container">
              <Button type="submit" variant="success" className="login-button">
                <i className="fas fa-arrow-right"></i>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
