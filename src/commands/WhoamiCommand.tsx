import { TypeAnimation } from "react-type-animation";

const WhoamiCommand = () => {
  return (
    <div>
      <TypeAnimation
        style={{ display: "block", whiteSpace: 'pre-line', fontWeight: "medium" }}
        sequence={[
          "Full Stack Web Developer",
          100,
          "Full Stack Web Developer\nEngineer Student",
          100,
          "Full Stack Web Developer\nEngineer Student\nReact • NodeJS • MongoDB • NextJS",
        ]}
				cursor={false}
				speed={90}
      />
    </div>
  );
};

export default WhoamiCommand;
