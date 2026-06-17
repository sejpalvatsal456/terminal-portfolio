import BlueLink from "../components/ui/BlueLink";

export default function ContactCommand() {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$email</span>
        <span className="text-white">=</span>
        <span className="text-[#a020f5]">sejpalvatsal456@gmail.com</span>
      </div>
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$phone</span>
        <span className="text-white">=</span>
        <span className="text-[#a020f5]">+91 9664830036</span>
      </div>
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$linked-in</span>
        <span className="text-white">=</span>
        <BlueLink link="https://www.linkedin.com/in/vatsal-sejpal-1878b4317/" />
      </div>
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$github</span>
        <span className="text-white">=</span>
        <BlueLink link="https://www.github.com/sejpalvatsal456/" />
      </div>
    </div>
  );
}
