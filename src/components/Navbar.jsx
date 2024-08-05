import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full h-[10vh] flex items-center justify-center bg-black text-white">
      <Link className="m-3" to={"/"}>
        Home
      </Link>
      <Link className="m-3" to={"/apply"}>
        Apply
      </Link>
      <Link className="m-3" to={"/tournaments"}>
        Tournaments
      </Link>
    </div>
  );
}

export default Navbar;
