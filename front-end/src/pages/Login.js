import React, { useContext, useState, useEffect } from 'react';

import { Link, Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';
import rockGlass from '../images/rockGlass.svg';

const API_URL = 'http://localhost:3001/';

const loginUser = (login) => {
  try {
    const response = axios.post(`${API_URL}login`, login);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  const { email, password, setEmail, setPassword } = useContext(ContextRegister);

  const users = localStorage.getItem('user');

  const history = useHistory();

  useEffect(() => {
    const isValid = () => {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      const min = 6;
      const passwordValid = password.length >= min;
      if (emailValid && passwordValid) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    isValid();
  }, [email, password, setIsDisabled]);

  const handleSubmitLogin = async (user) => {
    const roles = {
      administrator: '/admin/manage',
      seller: '/seller/orders',
    };

    if (!user.email || !user.password) setErrorMsg(true);

    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('token', data.token);
      return history.push({ pathname: roles[data.role] || '/customer/products' });
    } catch (err) {
      console.log(err);
    }
  };

  return users ? (
    <Redirect to="/customer/products" />
  ) : (
    <div>
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <form>
        Login:
        <input
          type="email"
          name="email"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        Senha:
        <input
          type="password"
          name="senha"
          data-testid="common_login__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ isDisabled }
          onClick={ ({ target }) => handleSubmitLogin(target.value) }
        >
          LOGIN
        </button>
        <button type="button" data-testid="common_login__button-register">
          <Link to="/register">Ainda não tenho conta</Link>
        </button>
        {errorMsg && (
          <span data-testid="common_login__element-invalid-email">
            Email ou senha inválidos
          </span>
        )}
      </form>
    </div>
  );
}

export default Login;
