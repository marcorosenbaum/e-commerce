import * as Dialog from "@radix-ui/react-dialog";
import { ArchiveIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cartActions } from "../../store/cart-slice";
import { useSelector, useDispatch } from "react-redux";

const getImageSrc = (productTitle) => {
  return `/assets/images/${productTitle.toLowerCase().replace(" ", "-")}.jpg`;
};

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);

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

  const removeFromCartHandler = (productId) => {
    dispatch(cartActions.removeItemFromCart(productId));
  };

  const totalSum = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex items-center gap-2">
          <ArchiveIcon width={20} height={20} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0  inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-0 right-0 bottom-0 p-4 bg-white min-w-80 max-w-full lg:max-w-[50%] max-h-screen overflow-auto">
          <Dialog.Close>
            <div className="flex gap-2 items-center">
              <Cross1Icon />
              close cart
            </div>
          </Dialog.Close>

          <div>
            {cartItems.length === 0 && <p>No items in cart</p>}
            <div>total: ${totalSum} </div>
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 items-center my-10 border-2"
                >
                  <img
                    src={getImageSrc(item.title)}
                    alt={item.title}
                    width={90}
                    height={90}
                  />

                  <div>
                    <h3>{item.title}</h3>
                    <p>Item price: ${item.price}</p>
                    <p>Total price: ${item.price * item.quantity}</p>
                  </div>
                  <div>
                    quantitiy: {item.quantity}
                    <button
                      onClick={() => addToCartHandler(item)}
                      className="p-2 m-2 border-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCartHandler(item.id)}
                      className="p-2 m-2 border-2"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
