import React from 'react'

export default function CommandError(
    { command }: { command: string }
) {
  return (
    <span className='text-red-500'>
        Error: {command} command not found.
    </span>
  )
}
