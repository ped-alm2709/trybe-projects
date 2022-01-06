import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextRegister from '../context/ContextRegister';

function Product({
  index, price, url_image: url, name,
}) {
  const [total, setTotal] = React.useState();

  const {
    totalProducts,
    setTotalProducts,
  } = useContext(ContextRegister);

  React.useEffect(() => {
    setTotalProducts({ ...totalProducts, [name]: total });
  }, [total]);

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${index}` }>{ price }</p>
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
        <p data-testid={ `customer_products__input-card-quantity-${index}` }>{ total }</p>
        <button
          data-testid={ `customer_products__button-card-add-item-${index}` }
          type="button"
          onClick={ () => setTotal(total + 1) }
        >
          -
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
