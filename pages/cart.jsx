import Image from "next/image"
import shortid from "shortid"
import Card, { CardCart } from "../components/Card"
import Header from "../components/Header"
import { deleteItem } from "../redux/cartSlice"

const { useSelector, useDispatch } = require("react-redux")
const { default: Helmet } = require("../components/Helmet")

const CartPage = () => {
  const carts = useSelector((state) => state.cart.carts)
  const dispatch = useDispatch()
  return (
    <>
      <Helmet />
      <Header />
      <div className="w-full">
        <div className="w-3/4 m-auto">
          <div className="my-8">
            <h2 className="mb-4 text-3xl text-center font-bold">
              Daftar Keranjang Anda
            </h2>
            {carts.length === 0 ? (
              <div key={shortid.generate()}>
                <div className="h-[500px] relative">
                  <Image src={"/assets/images/cart.jpg"} fill={true} />
                </div>
                <div className="text-center font-bold">
                  <h3 className="text-2xl">Keranjang Anda Kosong</h3>
                </div>
              </div>
            ) : (
              <div className="lg:mt-8 lg:grid lg:grid-cols-4 lg:gap-8 sm:mt-8 sm:flex sm:flex-col sm:gap-8">
                {carts.map((cart) => {
                  return (
                    <CardCart
                      key={shortid.generate()}
                      image={cart.image}
                      title={cart.title}
                      quantity={cart.quantity}
                      remove={() => dispatch(deleteItem(cart))}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
