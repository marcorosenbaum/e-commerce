import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
  };

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(
      cartActions.addItemToCart({
        title: product.title,
        price: product.price,
        id: product.id,
      })
    );
  };

  const imgSrc = `../../assets/images/${product.title
    .toLowerCase()
    .replace(" ", "-")}.jpg`;

  return (
    <div className=" p-4 border border-gray-900 bg-black/70 rounded-lg shadow-md shadow-gray-700 flex flex-col  gap-10 justify-between">
      <div className="">
        <img
          className="rounded-lg shadow-lg "
          alt={product.name}
          src={imgSrc}
          width={200}
          height={200}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-sm text-gray-500">${product.price}</p>
        <button
          onClick={() => addToCartHandler(product)}
          className="bg-green-300 hover:bg-green-400 text-white p-2 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
