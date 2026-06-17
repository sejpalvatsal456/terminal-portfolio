import BlueLink from "../components/ui/BlueLink";
import { projectList } from "../utils/projectList";

export default function ProjectsCommand() {
  return (
    <div className="flex flex-col mb-2 gap-2">
      {projectList.map((project, key) => {
        return (
          <div key={key} className="flex flex-col gap-2">
            <span className="flex flex-row gap-2">
              <div>
                {key + 1}.{" "}
                <span className="font-semibold">{project.name} </span>
                
              </div>
              {" - "}
              <BlueLink link={project.link} />
            </span>
            <p className="text-md text-[#797979] ml-2">
              {project.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
