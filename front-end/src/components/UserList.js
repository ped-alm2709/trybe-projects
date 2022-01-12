import React, { useContext } from 'react';
import axios from 'axios';
import ContextRegister from '../context/ContextRegister';

function UserList() {
  const {
    users,
    setUsers,
  } = useContext(ContextRegister);

  const API_URL = 'http://localhost:3001/';

  const deleteUser = (email) => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      axios.delete(API_URL + email, {
        headers: {
          Authorization: token,
        },
      });
      setUsers(users.filter((user) => user.email !== email));
    } catch (error) {
      console.log('Algo deu ruim!');
    }
  };

  console.log(setUsers);

  return (
    <div>
      { users && users.map((user, index) => (
        <div key={ index }>
          <p
            data-testid={ `admin_manage__element-user-table-item-number-${index + 1}` }
          >
            { index + 1 }
          </p>
          <p
            data-testid={ `admin_manage__element-user-table-name-${index + 1}` }
          >
            { user.name }
          </p>
          <p
            data-testid={ `admin_manage__element-user-table-email-${index + 1}` }
          >
            { user.email }
          </p>
          <p
            data-testid={ `admin_manage__element-user-table-role-${index + 1}` }
          >
            { user.role }
          </p>
          <button
            data-testid={ `admin_manage__element-user-table-remove-${index + 1}` }
            type="button"
            onClick={ () => deleteUser(user.email) }
          >
            Excluir
          </button>
        </div>
      )) }
    </div>
  );
}

export default UserList;
