export default function StaticCommandPromt({ command }: { command: string }) {
  return ( 
    <div className="flex gap-2">
      <span className="hidden md:inline text-lg text-[#0f0] font-medium font-ubuntu">
        pyking@Vatsal-Machine-845
      </span>
      <span className="text-lg text-[#00f] font-medium font-ubuntu">~$</span>
      <span className="text-lg text-[#0f0]">{command}</span>
    </div>    
  )
}
