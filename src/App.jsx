import { useState } from "react";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prevCount => prevCount + 1);
  const decrease = () => setCount(prevCount => Math.max(0, prevCount - 1)); // Prevent negative numbers
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h1 className="font-bold">Counter</h1>
      <h2 
        className={`flex items-center justify-center rounded-full w-24 h-24 text-5xl font-bold mb-6 
          ${count > 0 ? 'bg-green-500' : count < 0 ? 'bg-red-500' : 'bg-purple-500'} text-white`}
      >
        {count}
      </h2>
      
      <div className="flex gap-4">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          onClick={increase}
        >
          Increase
        </button>
        
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200 disabled:bg-gray-300"
          onClick={decrease}
          disabled={count <= 0}
        >
          Decrease
        </button>
        
        <button 
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;