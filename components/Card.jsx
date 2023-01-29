import Image from "next/image"

const Card = ({ image, title, text }) => {
  return (
    <div className="bg-gray-50 shadow-md cursor-pointer hover:bg-gray-800 hover:text-white">
      <div className="h-[250px] relative">
        <Image src={image} fill={true} />
      </div>
      <div className="h-[200px] p-4">
        <h3 className="mb-4 text-2xl text-center font-bold">{title}</h3>
        <p className="text-base">{text}</p>
      </div>
    </div>
  )
}

const CardMenu = ({
  image,
  title,
  text,
  quantity = 0,
  increment,
  decrement,
}) => {
  return (
    <div className="bg-gray-50 shadow-md hover:bg-gray-800 hover:text-white">
      <div className="h-[250px] relative">
        <Image src={image} fill={true} />
      </div>
      <div className="h-[200px] p-4">
        <h3 className="mb-4 text-2xl text-center font-bold">{title}</h3>
        <p className="text-base">{text}</p>
      </div>
      <div className="m-8 flex justify-between items-center text-base font-bold">
        <div
          className="w-[50px] p-2 text-center text-white font-bold bg-red-500 cursor-pointer"
          onClick={decrement}
        >
          -
        </div>
        <div className="text-center">{quantity}</div>
        <div
          className="w-[50px] p-2 text-center text-white font-bold bg-green-500 cursor-pointer"
          onClick={increment}
        >
          +
        </div>
      </div>
    </div>
  )
}

const CardCart = ({ image, title, quantity = 0, remove}) => {
  return (
    <div className="bg-gray-50 shadow-md hover:bg-gray-800 hover:text-white">
      <div className="h-[250px] relative">
        <Image src={image} fill={true} />
      </div>
      <div className="h-[200px] p-4">
        <h3 className="mb-4 text-2xl text-center font-bold">{title}</h3>
        <div className="text-base text-center font-bold">{quantity} Pcs</div>
        <div
          className="w-[120px] mx-auto my-4 p-2 text-base text-center text-white font-bold bg-red-500 cursor-pointer"
          onClick={remove}
        >
          Hapus
        </div>
      </div>
    </div>
  )
}

export { CardMenu, CardCart }

export default Card
