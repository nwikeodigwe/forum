import { IoMdMenu } from "react-icons/io";
import { IoMdPower } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="">
      <div className="container mx-auto bg-gray-800 text-white text-sm px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoMdMenu />
          <span>Quick links</span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdPower /> <span>Login</span>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-10 py-8 bg-white shadow-lg ">
        <ul className="flex items-center gap-5">
          <li className="text-2xl">MY FORUM</li>
          <li className="font-bold">FAQ</li>
          <li className="font-bold">Blog</li>
        </ul>
        <div className="flex items-center p-0">
          <fieldset className="flex items-center border w-[220px] border-gray-300 p-0">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="p-2"
            />
            <button className="hover:bg-gray-200 text-gray-700 p-2">
              <IoIosSearch className="text-xl" />
            </button>
          </fieldset>
        </div>
      </div>
    </nav>
  );
}
