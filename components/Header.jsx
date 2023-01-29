import Link from "next/link"

const Header = () => {
  return (
    <div className="p-8 bg-gray-800">
      <div className="lg:flex lg:flex-row lg:justify-center lg:gap-8 lg:text-lg sm:flex sm:flex-col sm:items-center sm:gap-8 text-white font-bold">
        <Link className="hover:text-sky-500" href={"/"}>
          Home
        </Link>
        <Link className="hover:text-sky-500" href={"/menu"}>
          Menu
        </Link>
        <Link className="hover:text-sky-500" href={"/cart"}>
          Cart
        </Link>
      </div>
    </div>
  )
}

export default Header
