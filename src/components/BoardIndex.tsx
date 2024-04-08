import { BsTextParagraph } from "react-icons/bs";
import { Link } from "react-router-dom";

const BoardIndex = () => {
  return (
    <section>
      <div className="container mx-auto px-5">
        <Link
          to="/"
          className="text-brand-500 hover:underline text-sm font-thin"
        >
          Board Index
        </Link>
        <div className="grid grid-cols-12 gap-5 mt-3">
          <div className="col-span-9 flex flex-col gap-5">
            <div className="shadow-md">
              <ul className="bg-brand-400 py-4 px-3 text-white text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5">
                      <div>
                        <a href="./viewforum.php?style=2&amp;f=1">
                          Main category
                        </a>
                      </div>
                    </dt>
                    <dd className="col-span-2">Topics</dd>
                    <dd className="col-span-2">Posts</dd>
                    <dd className="col-span-3">Last post</dd>
                  </dl>
                </li>
              </ul>
              <ul className="bg-white hover:bg-gray-50 p-3 text-gray-400 text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5 flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <BsTextParagraph className="text-2xl" />
                      </div>
                      <div className="flex flex-col">
                        <h2>Information</h2>
                        <p>Placeholder Forum</p>
                      </div>
                    </dt>
                    <dd className="col-span-2">1</dd>
                    <dd className="col-span-2">2</dd>
                    <dd className="col-span-3">
                      <h2>Welcome to PhpB</h2>
                      <p>
                        by <a href="#">admin</a>
                      </p>
                      <p>
                        <a href="#">View the latest post</a>
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
              <ul className="bg-white hover:bg-gray-50 p-3 text-gray-400 text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5 flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <BsTextParagraph className="text-2xl" />
                      </div>
                      <div className="flex flex-col">
                        <h2>Information</h2>
                        <p>Placeholder Forum</p>
                      </div>
                    </dt>
                    <dd className="col-span-2">1</dd>
                    <dd className="col-span-2">2</dd>
                    <dd className="col-span-3">
                      <h2>Welcome to PhpB</h2>
                      <p>
                        by <a href="#">admin</a>
                      </p>
                      <p>
                        <a href="#">View the latest post</a>
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
              <ul className="bg-white hover:bg-gray-50 p-3 text-gray-400 text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5 flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <BsTextParagraph className="text-2xl" />
                      </div>
                      <div className="flex flex-col">
                        <h2>Information</h2>
                        <p>Placeholder Forum</p>
                      </div>
                    </dt>
                    <dd className="col-span-2">1</dd>
                    <dd className="col-span-2">2</dd>
                    <dd className="col-span-3">
                      <h2>Welcome to PhpB</h2>
                      <p>
                        by <a href="#">admin</a>
                      </p>
                      <p>
                        <a href="#">View the latest post</a>
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div className="shadow-md">
              <ul className="bg-brand-400 py-4 px-3 text-white text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5">
                      <div>
                        <a href="./viewforum.php?style=2&amp;f=1">
                          Main category
                        </a>
                      </div>
                    </dt>
                    <dd className="col-span-2">Topics</dd>
                    <dd className="col-span-2">Posts</dd>
                    <dd className="col-span-3">Last post</dd>
                  </dl>
                </li>
              </ul>
              <ul className="bg-white hover:bg-gray-50 p-3 text-gray-400 text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5 flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <BsTextParagraph className="text-2xl" />
                      </div>
                      <div className="flex flex-col">
                        <h2>Information</h2>
                        <p>Placeholder Forum</p>
                      </div>
                    </dt>
                    <dd className="col-span-2">1</dd>
                    <dd className="col-span-2">2</dd>
                    <dd className="col-span-3">
                      <h2>Welcome to PhpB</h2>
                      <p>
                        by <a href="#">admin</a>
                      </p>
                      <p>
                        <a href="#">View the latest post</a>
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
              <ul className="bg-white hover:bg-gray-50 p-3 text-gray-400 text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5 flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <BsTextParagraph className="text-2xl" />
                      </div>
                      <div className="flex flex-col">
                        <h2>Information</h2>
                        <p>Placeholder Forum</p>
                      </div>
                    </dt>
                    <dd className="col-span-2">1</dd>
                    <dd className="col-span-2">2</dd>
                    <dd className="col-span-3">
                      <h2>Welcome to PhpB</h2>
                      <p>
                        by <a href="#">admin</a>
                      </p>
                      <p>
                        <a href="#">View the latest post</a>
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
              <ul className="bg-white hover:bg-gray-50 p-3 text-gray-400 text-sm font-thin">
                <li>
                  <dl className="grid grid-cols-12 items-center ">
                    <dt className="col-span-5 flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-md">
                        <BsTextParagraph className="text-2xl" />
                      </div>
                      <div className="flex flex-col">
                        <h2>Information</h2>
                        <p>Placeholder Forum</p>
                      </div>
                    </dt>
                    <dd className="col-span-2">1</dd>
                    <dd className="col-span-2">2</dd>
                    <dd className="col-span-3">
                      <h2>Welcome to PhpB</h2>
                      <p>
                        by <a href="#">admin</a>
                      </p>
                      <p>
                        <a href="#">View the latest post</a>
                      </p>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
            <div className="shadow-md">
              <div className="bg-gray-800 py-4 px-3 text-white">
                <h2 className="text-white text-sm font-thin">Who is online</h2>
              </div>
              <div className="flex flex-col bg-white gap-5 text-sm font-thin px-3 py-5">
                <div>
                  <p>
                    In total there are <strong>2</strong> users online :: 1
                    registered, 0 hidden and 1 guest (based on users active over
                    the past 5 minutes)
                  </p>
                  <p>
                    Most users ever online was <strong>3</strong> on 2021-09-30
                    21:14
                  </p>
                  <p>
                    Registered users: <strong>admin</strong>
                  </p>
                </div>
                <div>
                  <h2>Statistics</h2>
                  <hr />
                  <p className="mt-4">
                    Total posts <strong>2</strong> • Total topics{" "}
                    <strong>1</strong> • Total members <strong>1</strong> • Our
                    newest member <strong>admin</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-5">
            <div className="shadow-md">
              <div className="bg-gray-800 py-4 px-5 text-white">
                <h2 className="text-white text-sm font-thin">Login</h2>
              </div>
              <div className="flex flex-col bg-white gap-5 text-sm font-thin p-5">
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="border p-2 w-full"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border p-2 w-full"
                  />
                </div>
                <div>
                  <button className="shadow-lg hover:shadow-md bg-gray-50 hover:bg-gray-100 transition duration-300 text-gray-400 p-3 w-full">
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div className="shadow-md">
              <div className="bg-gray-800 py-4 px-5 text-white">
                <h2 className="text-white text-sm font-thin">Posts</h2>
              </div>
              <div className="flex flex-col bg-white gap-5 text-sm font-thin p-5">
                <div>
                  <h2 className="font-semibold">Announcement</h2>
                  <p>
                    by <a href="#">Ganju</a>
                  </p>
                  <p>Example of Announcement post</p>
                </div>

                <div>
                  <h2 className="font-semibold">Announcement</h2>
                  <p>
                    by <a href="#">Ganju</a>
                  </p>
                  <p>Example of Announcement post</p>
                </div>
                <div>
                  <h2 className="font-semibold">Announcement</h2>
                  <p>
                    by <a href="#">Ganju</a>
                  </p>
                  <p>Example of Announcement post</p>
                </div>
                <div>
                  <h2 className="font-semibold">Announcement</h2>
                  <p>
                    by <a href="#">Ganju</a>
                  </p>
                  <p>Example of Announcement post</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardIndex;
