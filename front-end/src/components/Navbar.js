import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory();

  const data = JSON.parse(localStorage.getItem('user'));

  const user = {
    role: data.role,
    name: data.name,
  };

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  if (user.role === 'administrator') {
    return (
      <div>
        <div>
          <Link
            to="/admin/manage"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Gerenciar Usuários
          </Link>
        </div>
        <div
          data-testid={ `${user.role}_products__element-navbar-user-full-name` }
        >
          <h1
            data-testid={ `${user.role}_products__element-navbar-user-full-name` }
          >
            { user.name }
          </h1>
        </div>
        <div>
          <button
            type="button"
            data-testid={ `${user.role}_products__element-navbar-link-logout` }
            onClick={ logout }
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {
        user.role === 'customer'
        && (
          <div>
            <Link
              to="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
          </div>
        )
      }
      <div>
        <Link
          to={ `/${user.role}/orders` }
          data-testid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </Link>
      </div>
      <div>
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </h1>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </div>
  );
}
