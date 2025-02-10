import React from "react"

export const Parent = () => {
  return (
    <div>
      <InputWithRefCallback
        ref={(current) => {
          console.log("ref callback", current?.value)

          return () => console.log("ref cleanup")
        }}
      />
    </div>
  )
}

const InputWithRefCallback: React.FC<PropsWithRef> = ({ ref, ...props }) => {
  return <input ref={ref} {...props} />
}

interface PropsWithRef extends React.HTMLAttributes<HTMLInputElement> {
  readonly ref: React.RefCallback<HTMLInputElement>
}
