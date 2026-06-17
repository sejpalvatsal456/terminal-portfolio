import AboutCommand from "../commands/AboutCommand"
import CommandError from "../commands/CommandError";
import HelpCommand from "../commands/HelpCommand";
import TestCommand from "../commands/TestCommand";
import WhoamiCommand from "../commands/WhoamiCommand";

type CommandType = {
  name: string;
  component: React.ReactElement;
}

const commands: CommandType[] = [
  { name: "test", component: <TestCommand /> },
  { name: "about", component: <AboutCommand /> },
  { name: "help", component: <HelpCommand /> },
  { name: "whoami", component: <WhoamiCommand /> },
]

export const commandParse = (inputCommand: string) => {
  for (let index = 0; index < commands.length; index++) {
    const command = commands[index];
    if(inputCommand.trim().toLowerCase() === command.name) {
      return command.component;
    }
  }
  return <CommandError command={inputCommand} />
}