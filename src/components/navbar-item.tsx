import { Link, useMatch } from "react-router-dom";

export default function NavbarItem({
  title,
  icon,
  url,
}: {
  title: string;
  icon: React.ReactNode;
  url: string;
}): JSX.Element {
  // check if the url is active
  const isActive = useMatch(url);

  return (
    <Link
      className={`flex hover:bg-indigo-800 px-4 py-3 rounded-md ${
        isActive ? "bg-indigo-800" : ""
      }`}
      to={url}
    >
      <div className="mx-auto sm:mx-0">{icon}</div>
      <div className="ms-3 hidden sm:block">{title}</div>
    </Link>
  );
}
