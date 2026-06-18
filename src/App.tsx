import { useEffect, useRef, useState } from "react";
import TerminalHeader from "./components/TerminalHeader";
import CommandPromt from "./components/CommandPromt";
import StaticCommandPromt from "./components/StaticCommandPromt";
import StartupCommands from "./commands/StartupCommands";
import { commandParse } from "./utils/commandParser";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [showCommandPrompt, setShowCommandPromt] = useState<boolean>(false);
  const [commandContent, setCommandContent] = useState<React.ReactElement[]>([
    <StartupCommands />,
  ]);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleCommand = (command: string) => {
    if (command.trim() === "") {
      setCommandContent((prev) => [
        ...prev,
        <StaticCommandPromt command={command} />,
      ]);
    } else if (
      command.trim().toLowerCase() === "clear" ||
      command.trim().toLowerCase() === "cls"
    ) {
      setCommandContent([]);
    } else {
      setCommandContent(prev => [
        ...prev,
        <StaticCommandPromt command={command} />,
        commandParse(command)
      ])
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 50);
    setTimeout(() => {
      setShowCommandPromt(true);
    }, 4000);
  }, []);

  useEffect(() => {
  if (outputRef.current) {
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }
}, [commandContent]);

  return (
    <main className="bg-[#2B2A4C] w-screen h-screen flex justify-center items-center">
      {/* Terminal Screen */}
      <div
        className={`
          bg-[#1E1E1E] rounded-xl shadow-xl
          transition-all duration-300 ease-out
          ${open ? "w-[80%] md:w-1/2 h-[70%]" : "w-[10%] h-[10%]"}
        `}
      >
        {/* Terminal Header */}
        <TerminalHeader open={open} />
        {/* Terminal Body */}
        <div className={"p-4 h-full " + (open ? "" : "hidden")}>
          {/* Output of previous command */}
          <div ref={outputRef} className="font-ubuntu text-white text-lg w-full max-h-[85%] overflow-y-auto terminal-scrollbar">
            {" "}
            {/* height is only for debugging purpose */}
            {commandContent}
          </div>
          {showCommandPrompt ? (
            <div>
              <CommandPromt handleCommand={handleCommand} />
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;
