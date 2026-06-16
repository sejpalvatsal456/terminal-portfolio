export default function CommandError(
    { command }: { command: string }
) {
  return (
    <span className='text-red-500'>
        Error: <b>{command}</b> command not found.
    </span>
  )
}
