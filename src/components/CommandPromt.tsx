import { useEffect, useEffectEvent, useRef, useState } from "react";

type CommandPromtProps = {
  handleCommand: (command: string) => void;
};

export default function CommandPromt({ handleCommand }: CommandPromtProps) {
  const [commandInput, setCommandInput] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 350); // after terminal animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex gap-2">
      <span className="text-lg text-[#0f0] font-medium font-ubuntu">
        portfolio@Vatsal-Machine-845
      </span>
      <span className="text-lg text-[#00f] font-medium font-ubuntu">~$</span>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleCommand(commandInput);
          setCommandInput("");
        }}
        className="w-[60%]"
      >
        <input
          type="text"
          value={commandInput}
          onChange={(e) => setCommandInput(e.target.value)}
          autoFocus
          ref={inputRef}
          className="bg-none text-white font-ubuntu text-lg w-full outline-none"
        />
      </form>
    </div>
  );
}
