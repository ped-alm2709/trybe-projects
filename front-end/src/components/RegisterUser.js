import React, { useContext } from 'react';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';

function RegisterUser() {
  const [disabled, setDisabled] = React.useState(true);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('');

  const API_URL = 'http://localhost:3001/';

  const { setUsers } = useContext(ContextRegister);

  React.useEffect(() => {
    axios.get(`${API_URL}users`).then(({ data }) => setUsers(data));
  }, []);

  React.useEffect(() => {
    const isValid = () => {
      const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      const min = 5;
      const max = 11;
      const nameValid = name.length > max;
      const passwordValid = password.length > min;

      if (emailValid && nameValid && passwordValid) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    isValid();
  }, [email, name, password, setDisabled]);

  console.log(email, name, password);

  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          onChange={ ({ target }) => setName(target.value) }
          id="name"
          data-testid="admin_manage__input-name"
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          onChange={ ({ target }) => setEmail(target.value) }
          id="email"
          data-testid="admin_manage__input-email"
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          onChange={ ({ target }) => setPassword(target.value) }
          id="password"
          data-testid="admin_manage__input-password"
        />
      </label>

      <label htmlFor="type">
        Tipo
        <select
          onChange={ ({ target }) => setUserType(target.value) }
          name="type"
          id="type"
          data-testid="admin_manage__select-role"
        >
          <option value="customer">Usuário</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>

      <button
        disabled={ disabled }
        onClick={ () => console.log(name, email, password, userType) }
        type="button"
        data-testid="admin_manage__button-register"
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default RegisterUser;
