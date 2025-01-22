import AllProducts from "../components/products/AllProducts";

function MarketPlace() {
  return (
    <section className="container mx-auto py-16 lg:py-24">
      <h1 className="text-3xl lg:text-5xl mb-8">ARTELIER</h1>
      <AllProducts />
    </section>
  );
}

export default MarketPlace;
