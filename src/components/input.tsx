export default function Input({
  label,
  id,
  ...props
}: {
  label: string;
  id: string;
  [key: string]: string | number | boolean | undefined;
}): JSX.Element {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
      />
    </div>
  );
}
