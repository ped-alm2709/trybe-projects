import React from 'react';
import Navbar from '../components/Navbar';
import RegisterUser from '../components/RegisterUser';
import UserList from '../components/UserList';

function Admin() {
  return (
    <div>
      <Navbar />
      <RegisterUser />
      <UserList />
    </div>
  );
}

export default Admin;
