import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Topbar = () => {
  return (
    <>
      <div className="flex justify-around bg-orange-300 text-lg p-5 ">
        <div className="text-2xl font-bold text-red-500 ">E-Com</div>
        <div className="flex justify-end gap-30 self-center">
          <Link href="#">Home</Link>
          <Link href="#">Messages</Link>
          <Link href="#">Cart</Link>
          <Link href="#"></Link>
          <Link href="#"></Link>
        </div>
      </div>
      <div className="flex justify-center bg-orange-300 pb-3 gap-5 transition-all ">
        <input type="text" name="Search" placeholder="Search Product" className="border-3 border-yellow-300 focus:outline-violet-50 text-lg rounded-lg px-3 py-2 w-200 "/>
        <CiSearch className="text-4xl relative top-1 cursor-pointer"/>
        <Link href="#" className="py-2 hover:bg-orange-400 px-2 h-10 rounded-lg self-center"> LOGIN</Link>
        <Link href="#" className="py-2 hover:bg-orange-400 px-2 h-10 rounded-lg self-center"> SIGN UP</Link>
      </div>
    </>
  );
};
export default Topbar;
