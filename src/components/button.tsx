export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: string | number | boolean | React.ReactNode;
}): JSX.Element {
  return (
    <button
      {...props}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    >
      {children}
    </button>
  );
}
