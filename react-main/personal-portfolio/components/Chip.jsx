export function Chip(props) {
  const { label } = props;

  return <div className="inline-block px-4 py-2 text-gray-700 bg-gray-200 rounded-full dark:text-gray-200 dark:bg-gray-800">{label}</div>;
}
