import { useEffect, useState } from "react";
import TerminalHeader from "./components/TerminalHeader";
import CommandPromt from "./components/CommandPromt";

function App() {
  const [open, setOpen] = useState(false);
  console.log(open);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, []);

  return (
    <main className="bg-[#2B2A4C] w-screen h-screen flex justify-center items-center">
      {/* Terminal Screen */}
      <div
        className={`
          bg-[#1E1E1E] rounded-xl shadow-xl
          transition-all duration-300 ease-out
          ${open ? "w-1/2 h-[70%]" : "w-[10%] h-[10%]"}
        `}
      >
        {/* Terminal Header */}
        <TerminalHeader open={open} />
        {/* Terminal Body */}
        <div className="p-4">
          <CommandPromt />
        </div>
      </div>
    </main>
  );
}

export default App;
