import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800">
        <div className="container py-10 px-10">
          <div className="grid grid-cols-3 justify-between gap-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-thin uppercase text-gray-600">
                About US
              </h2>
              <p className="text-sm text-zinc-200 leading-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-thin uppercase text-gray-600">
                You must know
              </h2>
              <ul className="flex flex-col gap-3 text-zinc-300 text-sm">
                <li>Our Rules</li>
                <li>Frequently Asked Questions</li>
                <li>BCode Example</li>
                <li>Welcome to My Forum</li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-thin uppercase text-gray-600">
                  Subscribe to our NewsLetter
                </h2>
                <fieldset className="flex items-center border w-[220px] border-gray-700 p-0">
                  <input
                    type="text"
                    name="search"
                    placeholder="Enter your email address"
                    className="p-2 bg-transparent"
                  />
                  <button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold p-3">
                    Subscribe
                  </button>
                </fieldset>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-md font-thin text-gray-600">
                  Social Links
                </h2>
                <ul className="flex items-center gap-4">
                  <li className="p-2 rounded-md bg-gray-900 text-white">
                    <FaFacebook />
                  </li>
                  <li className="p-2 rounded-md bg-gray-900 text-white">
                    <FaTwitter />
                  </li>
                  <li className="p-2 rounded-md bg-gray-900 text-white">
                    <FaInstagram />
                  </li>
                  <li className="p-2 rounded-md bg-gray-900 text-white">
                    <FaReddit />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-900 p-10 gap-5">
        <div className="flex items-center justify-between text-zinc-400 text-sm">
          <div>
            <Link to="/">Board Index</Link>
          </div>
          <ul className="flex items-center justify-end gap-5">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Delete Cookies</li>
          </ul>
        </div>
        <div className="flex items-center justify-between text-xs text-zinc-700">
          <div>
            <p>Powered by phpBB® Forum Software © phpBB Limited</p>
            <p>Designed & Developed By Odigwe</p>
          </div>
          <div>All rights reserver. 2024</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
