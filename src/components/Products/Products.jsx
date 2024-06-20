import PRODUCTS from "../../../products";

import ProductCard from "../ProductCard/ProductCard";

const products = PRODUCTS;

export default function Products() {
  return (
    <main className="px-10 text-white">
      <div className="fixed top-0 left-0 h-[100vh] w-[100vw] -z-10 ">
        <img
          src="/assets/images/frank-r-kOvOmb9946Y-unsplash.jpg"
          alt="Background image"
          className="object-cover w-full h-full"
        />
        <div className="bg-black/80 fixed top-0 left-0 h-[100vh] w-[100vw] -z-9"></div>
      </div>

      <h1 className="text-center text-5xl p-8">Paintings</h1>
      <div className="flex gap-x-20 gap-y-40 p-4 flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
