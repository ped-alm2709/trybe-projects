import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ContextRegister from '../context/ContextRegister';

const API_URL = 'http://localhost:3001/';

const createUser = (user) => {
  try {
    return axios.post(`${API_URL}register`, user);
  } catch (error) {
    console.log(error);
  }
};

function Register() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  const history = useHistory();

  const {
    name, email, password, setName, setEmail, setPassword } = useContext(ContextRegister);

  useEffect(() => {
    const isValid = () => {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      const min = 5;
      const max = 11;
      const nameValid = name.length > max;
      const passwordValid = password.length > min;

      if (emailValid && nameValid && passwordValid) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    isValid();
  }, [email, name, password, setIsDisabled]);

  const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    history.push({ pathname: '/customer/products' });
  };

  const handleSubmitRegister = async () => {
    try {
      const create = await createUser({ name, email, password });
      setToken(create.token);
    } catch (error) {
      setErrorMsg(true);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        Nome:
        <input
          type="text"
          name="nome"
          data-testid="common_register__input-name"
          onChange={ ({ target }) => setName(target.value) }
        />
        Email:
        <input
          type="email"
          name="email"
          data-testid="common_register__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        Senha:
        <input
          type="password"
          name="senha"
          data-testid="common_register__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ isDisabled }
          onClick={ () => handleSubmitRegister() }
        >
          Cadastrar
        </button>
        {errorMsg && (
          <p data-testid="common_register__element-invalid_register">
            Erro ao cadastrar
          </p>
        )}
      </form>
    </div>
  );
}

export default Register;
