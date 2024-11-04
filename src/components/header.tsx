import Input from "./input";

export default function Header(): JSX.Element {
  return (
    <header className="border-b-2 p-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">Rico Muhammad</div>
        <div className="ms-6 text-gray-300">
          {Date().split(" ").slice(1, 4).join(" ")}
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="ms-10 hidden sm:block">
          <Input label="" id="search" type="search" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}
