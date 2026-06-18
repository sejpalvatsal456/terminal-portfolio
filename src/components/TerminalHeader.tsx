import folderLogo from "../assets/macos-code-folder-removebg-preview.png";

export default function TerminalHeader({ open }: { open: boolean }) {
  return (
    <div className="bg-[#37363B] w-[100%] h-10 rounded-t-xl flex justify-between items-center px-5">
      {/* 3 buttons */}
      <div className="flex gap-2">
        <div className="w-5 h-5 bg-[#FF614C] rounded-full"></div>
        <div className="w-5 h-5 bg-[#FDBF27] rounded-full"></div>
        <div className="w-5 h-5 bg-[#1FCC46] rounded-full"></div>
      </div>
      <div className={"flex gap-3 " + (open ? "" : "hidden")}>
        <img src={folderLogo} alt="" className="h-7" />
        <span className="font-ubuntu text-white font-medium ">portfolio</span>
      </div>
      <div className="w-[15%]"></div>
    </div>
  );
}
