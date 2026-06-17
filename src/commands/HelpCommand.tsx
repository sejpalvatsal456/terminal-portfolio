import { commandList } from "../utils/commandParser";

export default function HelpCommand() {
  return (
    <div>
      <ul>
        {commandList.map((command) => {
          if (!command.visible) return;
          return (
            <li className="flex gap-4">
              <span>{command.name}</span>
              <span className="text-gray-500">- {command.desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
