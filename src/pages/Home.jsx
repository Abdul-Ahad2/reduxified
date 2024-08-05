import { Link } from "react-router-dom";
import AnimatedName from "../components/AnimatedName";
function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  text-gray-200 h-[90vh] flex items-center justify-center">
      <div className="text-center">
        <AnimatedName />
        <button className="bg-white text-black px-10 py-5 m-10 ">
          <Link to={"/apply"}>Apply</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
