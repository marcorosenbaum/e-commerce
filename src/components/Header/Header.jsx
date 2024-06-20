import Menu from "../Menu/Menu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Account from "../Account/Account";

import { useSelector } from "react-redux";

export default function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="flex justify-between p-4 bg-white sticky top-0">
      <Menu />
      <a href="/">
        <p className="text-3xl">Prototype Online Shop</p>
      </a>
      <div className="flex gap-4 items-bottom">
        <Account />

        <ShoppingCart className="relative" />
        <span className=" text-red-900">{cartQuantity}</span>
      </div>
    </div>
  );
}
