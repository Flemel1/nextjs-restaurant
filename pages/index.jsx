import Image from "next/image"
import shortid from "shortid"
import Card from "../components/Card"
import Header from "../components/Header"
import Helmet from "../components/Helmet"

const mottos = [
  {
    icon: "/assets/images/money.png",
    text: "Harga murah cocok untuk mahasiswa",
  },
  {
    icon: "/assets/images/food.png",
    text: "Rasa makanan bintang 5",
  },
  {
    icon: "/assets/images/motorcycle.png",
    text: "Pengantaran cepat dan langsung makan",
  },
]

const favorites = [
  {
    image: "/assets/images/paket-burger.jpg",
    title: "Paket Burger",
    text: "Beef burger dengan 1 pcs kentang goreng yang digoreng krispi dan saos spesial yang terbuat dari tomat pilihan",
  },
  {
    image: "/assets/images/burger-keju.jpg",
    title: "Burger Keju",
    text: "Beef burger dengan potongan keju tebal dan sayuran yang menggugah selera",
  },
  {
    image: "/assets/images/burger-jumbo.jpg",
    title: "Burger Jumbo",
    text: "Extra beef dan keju yang buat kamu ketagihan",
  },
  {
    image: "/assets/images/reguler-steak.jpg",
    title: "Reguler Steak",
    text: "Steak ukuran normal dengan saos spesial extra pedas dan potongan kentang goreng renyah dijamin mantap",
  },
]

export default function Home() {
  return (
    <>
      <Helmet />
      <div className="w-full">
        <Header />
        <div className="h-[600px] relative">
          <Image src={"/assets/images/banner.jpg"} fill={true} />
          <div className="absolute p-8 sm:top-1/4 text-gray-50">
            <h1 className="lg:text-4xl sm:text-3xl text-center font-bold">
              Selamat Datang di Restoran Kami
            </h1>
            <h2 className="mt-4 lg:text-3xl sm:text-2xl">
              Kamu lapar? Saat ini kamu bisa melakukan pesanan secara online loh
              melalui restoran kami. Ayo segera pesan dan dapatkan pengalaman
              makan yang menyenangkan
            </h2>
          </div>
        </div>
      </div>

      <div className="w-3/4 m-auto">
        {/* Motto Section */}
        <div className="my-8">
          <h2 className="text-3xl text-center font-bold">Motto Kami</h2>
          <div className="lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-8 sm:mt-8 sm:flex sm:flex-col sm:gap-8">
            {mottos.map((motto) => {
              return (
                <div key={shortid.generate()} className="bg-white">
                  <div className="relative">
                    <Image
                      className="m-auto"
                      src={motto.icon}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-base text-center font-bold">
                      {motto.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Menu Section */}
        <div className="my-8">
          <h2 className="text-3xl text-center font-bold">Menu Populer Kami</h2>
          <div className="lg:mt-8 lg:grid lg:grid-cols-4 lg:gap-8 sm:mt-8 sm:flex sm:flex-col sm:gap-8">
            {favorites.map((favorite) => {
              return (
                <Card
                  key={shortid.generate()}
                  image={favorite.image}
                  title={favorite.title}
                  text={favorite.text}
                />
              )
            })}
          </div>
        </div>
        {/* Chef Section */}
        <div className="my-8">
          <div className="flex flex-col gap-8">
            <div className="flex lg:flex-row sm:flex-col shadow-xl">
              <div className="h-[600px] lg:w-[30vw] flex-none relative sm:w-full">
                <Image src={"/assets/images/chef-1.jpg"} fill={true} />
              </div>
              <div className="p-8 grow bg-gray-50">
                <h3 className="mb-4 text-2xl font-bold">Chef Bryan</h3>
                <p className="text-base leading-loose">
                  Chef Bryan merupakan head chef dari restoran kami dimana chef
                  bryan ini sudah memiliki pengalaman lebih dari 10 tahun di
                  dunia kuliner dan memiliki pengalaman bekerja di 10 hotel
                  bintang 5 yang ada diseluruh dunia. Spesialisasi dibidang
                  western dan asian food dia mendapatkan penghargaan dari
                  organisasi kuliner dunia sebagai salah satu chef muda yang
                  berprestasi dan memiliki reputasi baik dibidang makanan
                  diseluruh dunia. Dengan adanya chef Bryan di dapur kami
                  tentunya setiap menu yang ada di restoran kami sendiri
                  merupakan kreasi yang dibuat dengan tangannya sendiri dan
                  dijamin enak dan luar biasa.
                </p>
              </div>
            </div>

            <div className="sm:flex-col sm:flex-col-reverse shadow-xl flex lg:flex-row ">
              <div className="p-8 grow bg-gray-50">
                <h3 className="mb-4 text-2xl font-bold">Chef Louis</h3>
                <p className="text-base leading-loose">
                  Chef Louis merupakan sous chef dari restoran kami dimana chef
                  Louis ini sudah memiliki pengalaman lebih dari 10 tahun di
                  dunia kuliner dan memiliki pengalaman bekerja di 10 hotel
                  bintang 5 yang ada diseluruh dunia. Spesialisasi dibidang
                  western dan asian food dia mendapatkan penghargaan dari
                  organisasi kuliner dunia sebagai salah satu chef muda yang
                  berprestasi dan memiliki reputasi baik dibidang makanan
                  diseluruh dunia. Dengan adanya chef Louis di dapur kami
                  tentunya setiap menu yang ada di restoran kami sendiri
                  merupakan kreasi yang dibuat dengan tangannya sendiri dan
                  dijamin enak dan luar biasa.
                </p>
              </div>
              <div className="sm:w-full h-[600px] lg:w-[30vw] flex-none relative">
                <Image src={"/assets/images/chef-2.jpg"} fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
