import PropTypes from "prop-types";

function ProductCard({ name, price = 0, inStock = false }) {
  return (
    <>
      <h4>Product Name: {name}</h4>
      <h4>Product Price: {price}</h4>
      <h4 style={{ color: inStock ? "green" : "red" }}>
        {inStock === true ? "In Stock" : "Out of Stock"}
      </h4>
    </>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  inStock: PropTypes.bool,
};

export default ProductCard;
