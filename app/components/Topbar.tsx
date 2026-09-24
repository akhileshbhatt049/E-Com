import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Topbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-orange-400 shadow-md">
        <div className="flex items-center justify-between max-w-7xl mx-auto  py-4 ">

          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-white" >
            E<span className="text-red-600">-Com</span>
          </Link>

          {/* Navigation */}
          <div className=" flex items-center gap-10">
            <Link href="#" className="text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300">
              Home
            </Link>

            <Link href="#" className="text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300" >
              Messages
            </Link>

            <Link href="#" className="text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300" >
              Cart
            </Link>
          </div>

          {/* Login and SignUp Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="border border-white px-4 py-2 rounded-lg text-white font-semibold shadow-sm hover:bg-white hover:text-orange-500 transition duration-300" >
              Login
            </Link>

            <Link href="/signup" className="bg-red-500 px-4 py-2 rounded-lg font-semibold text-white shadow-sm hover:bg-red-600 transition duration-300" >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-4xl mx-auto px-6 pb-5">
          <div className="flex items-center relative ">

            <input type="text" name="Search" placeholder="Search products" className="w-full h-12 bg-white px-4 pr-14 border-2 border-transparent rounded-lg text-gray-700 text-lg shadow-sm outline-none focus:border-orange-500 transition duration-300" />
            <button type="button" className="flex items-center justify-center rounded-lg bg-orange-500 text-white absolute right-2 w-10 h-10 hover:bg-orange-600 transition duration-300" >
              <CiSearch className="text-2xl" />
            </button>

          </div>
        </div>
      </nav>
    </>
  );
};
export default Topbar;
