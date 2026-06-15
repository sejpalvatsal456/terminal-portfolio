import { useEffect, useState } from "react";
import TerminalHeader from "./components/TerminalHeader";
import CommandPromt from "./components/CommandPromt";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  // console.log(open);

  const handleCommand = (command: string) => {
    console.log(command + " is requested.");
  }

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 50);
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
        <div className={"p-4 h-full " + (open ? "" : "hidden")}>
          {/* Output of previous command */}
          <div className=" w-full h-[85%]"> {/* height is only for debugging purpose */}

          </div>
          <div className="">
            <CommandPromt handleCommand={handleCommand} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
