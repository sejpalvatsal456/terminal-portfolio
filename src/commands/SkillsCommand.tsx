import { skillList } from "../utils/skills";

export default function SkillsCommand() {
  return (
    <div>
      {/* <div className="flex flex-row gap-5">
        <span>HTML:</span>
        <span
          style={{ color: '#00ff00' }}
        >|####################| 100%</span>
      </div> */}
      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          {skillList.map((skill) => (
            <span>{skill.name}:</span>
          ))}
        </div>
        <div className="flex flex-col">
          {skillList.map((skill) => {
            let color = "";
            if (skill.skill >= 85) color = "#0f0";
            else if (skill.skill >= 60) color = "#c4ff00";
            else if (skill.skill >= 40) color = "#ff0";
            else color = "#f00";

            const filled = Math.round(skill.skill / 5);
            const bar = "#".repeat(filled) + "   ".repeat(20 - filled);

            return <span style={{ color: color, whiteSpace: "pre" }}> |{bar}| {skill.skill}%</span>;
          })}
        </div>
      </div>
    </div>
  );
}
