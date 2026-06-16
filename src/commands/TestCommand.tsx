import { TypeAnimation } from "react-type-animation";

export default function TestCommand() {
  return (
    <TypeAnimation 
      sequence={[
        'Test Command',
        500,
        '',
        10
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}
