import { useEffect, useState } from "react";
import TerminalHeader from "./components/TerminalHeader";
import CommandPromt from "./components/CommandPromt";
import TestCommand from "./commands/TestCommand";
import StaticCommandPromt from "./components/StaticCommandPromt";
import CommandError from "./commands/CommandError";
import HelpCommand from "./commands/HelpCommand";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [commandContent, setCommandContent] = useState<React.ReactElement[]>([]);
  // console.log(open);
  const handleCommand = (command: string) => {
    if (command.trim().toLowerCase() === "test") {
      setCommandContent(prev => [
        ...prev,
        <StaticCommandPromt command={command} />,
        <TestCommand />
      ])
    }

    else if (command.trim().toLowerCase() === "help") {
      setCommandContent(prev => [
        ...prev,
        <StaticCommandPromt command={command} />,
        <HelpCommand />
      ])
    }
    
    else if (command.trim().toLowerCase() === "clear" || command.trim().toLowerCase() === "cls") {
      setCommandContent([]);
    }
    
    else {
      setCommandContent(prev => [
        ...prev,
        <StaticCommandPromt command={command} />,
        <CommandError command={command} />
      ])
    }
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
          <div className="font-ubuntu text-white text-lg w-full max-h-[85%]"> {/* height is only for debugging purpose */}
            {commandContent}
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
