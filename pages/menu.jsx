import { useDispatch, useSelector } from "react-redux"
import shortid from "shortid"
import { CardMenu } from "../components/Card"
import Header from "../components/Header"
import Helmet from "../components/Helmet"
import { addToCart, removeToCart } from "../redux/cartSlice"

const menus = [
  {
    id: 1,
    image: "/assets/images/paket-burger.jpg",
    title: "Paket Burger",
    text: "Beef burger dengan 1 pcs kentang goreng yang digoreng krispi dan saos spesial yang terbuat dari tomat pilihan",
    quantity: 1,
  },
  {
    id: 2,
    image: "/assets/images/burger-keju.jpg",
    title: "Burger Keju",
    text: "Beef burger dengan potongan keju tebal dan sayuran yang menggugah selera",
    quantity: 1,
  },
  {
    id: 3,
    image: "/assets/images/burger-jumbo.jpg",
    title: "Burger Jumbo",
    text: "Extra beef dan keju yang buat kamu ketagihan",
    quantity: 1,
  },
  {
    id: 4,
    image: "/assets/images/reguler-steak.jpg",
    title: "Reguler Steak",
    text: "Steak ukuran normal dengan saos spesial extra pedas dan potongan kentang goreng renyah dijamin mantap",
    quantity: 1,
  },
]

const MenuPage = () => {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart.carts)

  return (
    <>
      <Helmet />
      <Header />

      <div className="w-full">
        <div className="w-3/4 m-auto">
          <div className="my-8">
            <h2 className="mb-4 text-3xl text-center font-bold">
              Daftar Menu Kami
            </h2>
            <div className="lg:mt-8 lg:grid lg:grid-cols-4 lg:gap-8 sm:mt-8 sm:flex sm:flex-col sm:gap-8">
              {menus.map((menu) => {
                const food = carts.find((cart) => cart.id === menu.id)
                return food === undefined ? (
                  <CardMenu
                    key={shortid.generate()}
                    image={menu.image}
                    title={menu.title}
                    text={menu.text}
                    increment={() => dispatch(addToCart(menu))}
                    decrement={() => dispatch(removeToCart(menu))}
                  />
                ) : (
                  <CardMenu
                    key={shortid.generate()}
                    image={food.image}
                    title={food.title}
                    text={food.text}
                    increment={() => dispatch(addToCart(food))}
                    decrement={() => dispatch(removeToCart(food))}
                    quantity={food.quantity}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuPage
