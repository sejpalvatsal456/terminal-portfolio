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
        <a
          href="https://www.linkedin.com/in/vatsal-sejpal-1878b4317/"
          target="_blank"
          rel="noreferrer"
          className="text-[#00f] underline cursor-pointer"
        >
          https://www.linkedin.com/in/vatsal-sejpal-1878b4317/
        </a>
      </div>
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$github</span>
        <span className="text-white">=</span>
        <a
          href="https://www.github.com/sejpalvatsal456/"
          target="_blank"
          rel="noreferrer"
          className="text-[#00f] underline cursor-pointer"
        >
          https://www.github.com/sejpalvatsal456/
        </a>
      </div>
    </div>
  );
}
