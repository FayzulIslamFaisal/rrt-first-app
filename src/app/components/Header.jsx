import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className=" bg-stone-500 px-4 py-2">
        <header className=" flex items-center justify-between">
          <div className="">
            <Link href="/" className=" text-white font-bold ">
              E-Shop
            </Link>
          </div>
          <div className="">
            <form>
              <div className=" flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className=" w-full px-3 outline-none"
                />
                <button
                  type="submit"
                  className=" bg-slate-300 text-black px-2 py-1"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
          <nav>
            <ul className="flex gap-3 items-center text-white">
              <li>
                <Link href="#">
                  <FaCartPlus />
                </Link>
              </li>
              <li>
                <Link href="/Login">Login</Link>
              </li>
              <li>
                <Link href="/Registration">Registration</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className=" bg-slate-300 flex justify-center px-4 py-3">
        <ul className=" flex items-center gap-5">
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/"> Shop</Link>
          </li>

          <li>
            <Link href="/"> About</Link>
          </li>

          <li>
            <Link href="/"> Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
