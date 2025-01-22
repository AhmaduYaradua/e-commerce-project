import { Link } from "react-router";

function Hero() {
  return (
    <div className="max-w-[1000px] mx-auto py-24 text-center px-4">
      <h1 className="text-3xl lg:text-7xl text-green-800 capitalize mb-4">
        Bombers...Jackets....Coats
      </h1>
      <p className="max-w-[600px] mx-auto font-light text-3xl text-gray-500 mb-4">
        If YOU can wear it, WE have it
      </p>
      <Link to={"/marketplace"}>
        <button className="bg-green-500 px-10 py-2 animate-pulse font-semibold text-lg text-white rounded-md">
          Cop a pair
        </button>
      </Link>

      <img className="w-[500px] mx-auto" src="/hero.png" alt="." />
    </div>
  );
}

export default Hero;
