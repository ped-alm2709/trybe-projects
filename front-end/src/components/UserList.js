import React, { useContext } from 'react';
import ContextRegister from '../context/ContextRegister';

function UserList() {
  const {
    users,
    setUsers,
  } = useContext(ContextRegister);

  console.log(users, setUsers);

  return (
    <div>
      { users && users.map((user, index) => (
        <div key={ index }>
          <p>{ index + 1 }</p>
          <p>{ user.name }</p>
          <p>{ user.email }</p>
          <p>{ user.role }</p>
          <button type="button">Excluir</button>
        </div>
      )) }
    </div>
  );
}

export default UserList;
