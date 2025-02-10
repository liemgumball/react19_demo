import React from "react"

// Using forwardRef
export const InputWithForwardRef = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input ref={ref} {...props} />
})

// ref as a prop
export const InputWithRef: React.FC<PropsWithRef> = ({ ref, ...props }) => {
  return <input ref={ref} {...props} />
}
interface PropsWithRef extends React.HTMLAttributes<HTMLInputElement> {
  readonly ref: React.RefObject<HTMLInputElement>
}
