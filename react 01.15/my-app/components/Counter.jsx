import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className="ml-4 mt-4 mb-3">Counter:{count}</h1>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white rounded mx-3 px-2"
        onClick={minus}
      >
        hasah
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white rounded mx-3 px-2"
        onClick={add}
      >
        nemeh
      </button>
    </div>
  );
}
