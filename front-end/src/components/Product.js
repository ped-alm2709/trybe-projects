import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextRegister from '../context/ContextRegister';

function Product({
  index, price, url_image: url, name,
}) {
  const [total, setTotal] = React.useState(0);

  const {
    totalProducts,
    setTotalProducts,
  } = useContext(ContextRegister);

  React.useEffect(() => {
    if (total === 0) {
      delete totalProducts[name];
      setTotalProducts({ ...totalProducts });
    } else {
      setTotalProducts({ ...totalProducts, [name]: { total, price } });
    }
  }, [total]);

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${index}` }
      >
        { price.replace(/\./g, ',') }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${index}` }
        src={ url }
        alt="product"
      />
      <p data-testid={ `customer_products__element-card-title-${index}` }>{ name }</p>
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${index}` }
          onClick={ () => total > 0 && setTotal(total - 1) }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${index}` }
          onChange={ ({ target }) => setTotal(target.value) }
          value={ total }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${index}` }
          type="button"
          onClick={ () => setTotal(total + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Product;

Product.propTypes = {
  index: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
