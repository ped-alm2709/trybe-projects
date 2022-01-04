import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import ContextRegister from '../context/ContextRegister';

function Register() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);

  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword } = useContext(ContextRegister);

  // const history = useHistory();

  useEffect(() => {
    const isValid = () => {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      const min = 6;
      const max = 12;
      const nameValid = name.length > max;
      const passwordValid = password.length >= min;

      if (emailValid && nameValid) {
        if (passwordValid) {
          setIsDisabled(false);
        }
      } else {
        setIsDisabled(true);
      }
    };
    isValid();
  }, [email, name, password, isDisabled]);

  /* const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    history.push({ patchname: '/customer/products' });
  };
  */
  const handleSubmitRegister = async () => {
    const create = await createUser({ name, email, password });
    if (!create) return setErrorMsg(true);
    setToken(create.token);
    return create;
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
        { errorMsg
        && <p data-testid="common_login__element-invalid-email">Erro ao cadastrar</p> }
      </form>
    </div>
  );
}

export default Register;
