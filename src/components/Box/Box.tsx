import { ReactNode } from "react"
import tw from 'twin.macro'

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Bx = tw.div`bg-white p-6 rounded-lg shadow-md`

function Box({ children, className }: BoxProps) {
  return (
    <Bx className={`${ className ? className : ''}`}>{children}</Bx>
  )
}

export default Box