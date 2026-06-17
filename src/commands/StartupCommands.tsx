import { useEffect, useState } from "react";
import StaticCommandPromt from "../components/StaticCommandPromt";
import WhoamiCommand from "./WhoamiCommand";
import HelpCommandAnimation from "./HelpCommandAnimation";

export default function StartupCommands() {
  const [showWhoAmI, setShowWhoAmI] = useState<boolean>(false);
  const [showHelpCommand, setShowHelpCommand] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWhoAmI(true);
    }, 500);
    setTimeout(() => {
      setShowHelpCommand(true);
    }, 1500);
  }, []);

  return (
    <>
      <StaticCommandPromt command="whoami" />
      {showWhoAmI ? <WhoamiCommand /> : null}
      {showHelpCommand ? 
        <>
          <StaticCommandPromt command="help" />
          <HelpCommandAnimation />
        </>
      : null}
    </>
  );
}
