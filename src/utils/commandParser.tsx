import AboutCommand from "../commands/AboutCommand";
import CommandError from "../commands/CommandError";
import ContactCommand from "../commands/ContactCommand";
import HelpCommand from "../commands/HelpCommand";
import ResumeCommand from "../commands/ResumeCommand";
import SkillsCommand from "../commands/SkillsCommand";
import TestCommand from "../commands/TestCommand";
import WhoamiCommand from "../commands/WhoamiCommand";

type CommandType = {
  name: string;
  component?: React.ReactElement;
  desc?: string;
  visible: boolean;
};

// const commandList: CommandType[] = [
//   { name: "about", desc: "Learn about me.", component: <About /> },
//   { name: "skills", desc: "View tech stack" },
//   { name: "project", desc: "See my work" },
//   { name: "resume", desc: "Download resume" },
//   { name: "contact", desc: "Get in touch" },
//   { name: "clear", desc: "Clear Terminal" },
// ];

export const commandList: CommandType[] = [
  {
    name: "test",
    component: <TestCommand />,
    desc: "A Test Command",
    visible: false,
  },
  {
    name: "about",
    component: <AboutCommand />,
    desc: "Learn about me.",
    visible: true,
  },
  {
    name: "skills",
    component: <SkillsCommand />,
    desc: "View tech stack",
    visible: true,
  }, 
  {
    name: "resume",
    component: <ResumeCommand />,
    desc: "Download resume",
    visible: true
  },
  {
    name: "contact",
    component: <ContactCommand />,
    desc: "Get in touch",
    visible: true
  },
  {
    name: "help",
    component: <HelpCommand />,
    desc: "List the commands and thier uses",
    visible: true,
  },
  {
    name: "whoami",
    component: <WhoamiCommand />,
    desc: "Display my Introduction",
    visible: true,
  },
  

];

export const commandParse = (inputCommand: string) => {
  for (let index = 0; index < commandList.length; index++) {
    const command = commandList[index];
    if (
      inputCommand.trim().toLowerCase() === command.name &&
      command.component
    ) {
      return command.component;
    }
  }
  return <CommandError command={inputCommand} />;
};
