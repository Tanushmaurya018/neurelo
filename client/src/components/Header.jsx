import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaLock } from "react-icons/fa";

// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  const dispatch = useDispatch();

  return (
    <header className="transition-all ease-in-out container mx-auto bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-full h-[70px] flex justify-between items-center p-3 gap-2">
      <Link to="/">
        <h1 className="text-lg lg:text-3xl text-gray-300">JuniorLearnLink</h1>
      </Link>

      {/* <div className="flex justify-center items-center gap-1">
        <input
          type="text"
          className="w-[100px] lg:w-[600px] h-[20px] lg:h-[40px] p-4 rounded-full text-lg  lg:text-xl items-center justify-center "
          placeholder="Search..."
        ></input>
        <button>
          <CiSearch className="bg-gray-200 rounded-full w-auto h-auto p-2 text-xl lg:text-3xl hover:bg-white hover:text-black transition ease-in-out" />
        </button>
      </div> */}

      <ul className="flex items-center gap-5 text-2xl text-gray-300">
        {/* <div className="hidden lg:inline">
          <Link to="/about">
            <li className="">About</li>
          </Link>
        </div> */}
        {currentUser?.userWoPassword != null ? (
          <Link
            to="/profile"
            className="flex gap-2 items-center justify-center"
          >
            <div className="hidden lg:inline">
              <h1> {currentUser.userWoPassword?.username}</h1>
            </div>
            <img
              className="w-[50px] h-[50px] object-cover rounded-full"
              src={currentUser?.userWoPassword?.photoURL}
            ></img>
          </Link>
        ) : (
          <Link to="/login">
            {" "}
            <li className="font-Montserrat text-xl rounded-full md:hover:px-16 text-gray-100 bg-cyan-900
             hover:bg-gray-800  transition-all ease-linear p-3">
              <span className="inline md:hidden"><FaLock /></span>
              <span className="hidden md:inline">Log In</span>
            </li>
          </Link>
        )}
      </ul>
    </header>
  );
};

export default Header;
