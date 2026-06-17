import { ReactTyped } from "react-typed";
import { commandList } from "../utils/commandParser";

export default function HelpCommandAnimation() {
  const helpText = commandList
    .map(
      (command) =>
        `<span>${command.name}</span> <span style="color:#6b7280">- ${command.desc}</span>`,
    )
    .join("<br />");

  return <ReactTyped strings={[helpText]} typeSpeed={1} showCursor={false} />;
}
