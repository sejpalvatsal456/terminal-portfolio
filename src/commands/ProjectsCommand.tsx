import { useEffect, useState } from "react";
import BlueLink from "../components/ui/BlueLink";
import { projectList } from "../utils/projectList";

type Mode = "list" | "details";

export default function ProjectsCommand() {
  const [mode, setMode] = useState<Mode>("list");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [confirmedIndex, setConfirmedIndex] = useState<number | null>(null);

  // Keyboard navigation for the list. Only the keys we care about are
  // intercepted (and only in the relevant mode) so the real command input
  // keeps working normally for everything else (typing new commands, etc).
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (mode === "list") {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % projectList.length);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            (prev - 1 + projectList.length) % projectList.length
          );
        } else if (e.key === "Enter") {
          e.preventDefault();
          setConfirmedIndex(selectedIndex);
          setMode("details");
        }
      } else if (mode === "details") {
        if (e.key === "Escape") {
          e.preventDefault();
          setMode("list");
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mode, selectedIndex]);

  const selectProject = (index: number) => {
    setSelectedIndex(index);
    setConfirmedIndex(index);
    setMode("details");
  };

  if (mode === "details" && confirmedIndex !== null) {
    const project = projectList[confirmedIndex];
    return (
      <div className="flex flex-col mb-2 gap-2">
        <div className="flex flex-row gap-2 items-baseline">
          <span className="font-semibold text-lg">{project.name}</span>
          <BlueLink link={project.link} />
        </div>
        <p className="text-md text-[#797979] ml-2">{project.desc}</p>
        <p className="text-sm text-[#555] mt-1">
          Press <span className="text-[#0f0]">Esc</span> to go back to the
          project list.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-2 gap-1">
      <p className="text-sm text-[#797979] mb-1">
        Use <span className="text-[#0f0]">↑/↓</span> and{" "}
        <span className="text-[#0f0]">Enter</span> to select a project, or
        click on one.
      </p>
      {projectList.map((project, key) => {
        const isSelected = key === selectedIndex;
        return (
          <div
            key={key}
            onClick={() => selectProject(key)}
            className={
              "flex items-baseline gap-2 px-2 py-1 rounded cursor-pointer transition-colors " +
              (isSelected
                ? "bg-[#00f] text-white"
                : "bg-transparent text-gray-500")
            }
          >
            <span>{key + 1}.</span>
            <span className="font-semibold">{project.name}</span>
          </div>
        );
      })}
    </div>
  );
}