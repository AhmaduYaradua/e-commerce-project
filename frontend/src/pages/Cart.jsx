import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";
import BackButton from "../components/ui/buttons/BackButton";

function Cart() {
  return (
    <section className=" max-w-[1100px] mx-auto p-4">
      <BackButton />
      <h2 className="text-3xl text-green-700 font-semibold">YOUR PICKS</h2>
      <section className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[70%]">
          <CartList />
        </div>
        <div className="w-full lg:w-[30%]">
          <CartSummary />
        </div>
      </section>
    </section>
  );
}
export default Cart;
