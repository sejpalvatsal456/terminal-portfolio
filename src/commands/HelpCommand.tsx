import commandList from "../utils/commandList";

export default function HelpCommand() {
  return (
    <div>
        <ul>
            {commandList.map(command => (
                <li className="flex gap-4">
                    <span>{command.name}</span>
                    <span className="text-gray-500">- {command.desc}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}
