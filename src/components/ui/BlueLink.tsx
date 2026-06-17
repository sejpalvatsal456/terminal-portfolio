export default function BlueLink({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-[#00f] underline cursor-pointer"
    >
      {link}
    </a>
  )
}
