import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-slate-950 text-gray-200 w-36 sm:w-72 h-screen px-7 py-12 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-10">
          <span className="font-bold">FINE</span>bank.
          <span className="font-bold">IO</span>
        </div>
        <Link
          className="flex bg-indigo-800 text-white px-4 py-3 rounded-md"
          to="/"
        >
          <div className="text-white mx-auto sm:mx-0">A</div>
          <div className="ms-3 hidden sm:block">Overview</div>
        </Link>
        <div className="flex hover:bg-indigo-800 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">B</div>
          <div className="ms-3 hidden sm:block">MENU</div>
        </div>
        <div className="flex hover:bg-indigo-800 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">C</div>
          <div className="ms-3 hidden sm:block">MENU</div>
        </div>
      </div>
      <div>
        <div className="flex bg-indigo-800 px-4 py-3 rounded-md">
          <div className="mx-auto sm:mx-0">D</div>
          <div className="ms-3 hidden sm:block">Logout</div>
        </div>
        <div className="border-b my-10 border-b-indigo-200"></div>
        <div className="flex justify-between">
          <div className="mx-auto">foto</div>
          <div className="hidden sm:block">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block">icon</div>
        </div>
      </div>
    </nav>
  );
}
