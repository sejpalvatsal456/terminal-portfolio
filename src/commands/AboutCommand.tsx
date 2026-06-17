export default function AboutCommand() {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$name</span>
        <span className="text-white">=</span>
        <span className="text-[#a020f5]">Vatsal-Sejpal</span>
      </div>
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$position</span>
        <span className="text-white">=</span>
        <span className="text-[#a020f5]">full-stack-web-dev</span>
      </div>
      <div className="flex gap-2">
        <span className="text-[#8ef520]">$about-me</span>
        <span className="text-white">=</span>
        <span className="text-[#fff200] inline-block w-1/2">
          ```I enjoy turning ideas into real projects using modern web
          technologies. <br />
          My goal is to grow into a strong full-stack developer and work on
          meaningful products that make a difference. ```
        </span>
      </div>
    </div>
  );
}
