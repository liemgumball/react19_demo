import { Button, ButtonProps } from "@/components/ui/button.tsx"
import React, { startTransition } from "react"
import { requestFormReset } from "react-dom"

export const ResetFormButton: React.FC<
  ButtonProps & { formref: React.RefObject<HTMLFormElement | null> }
> = ({ onClick: _, type = "button", variant = "secondary", ...props }) => {
  const onClick = () => {
    startTransition(() => {
      if (!props.formref.current) return

      requestFormReset(props.formref.current)
    })
  }

  return <Button {...props} onClick={onClick} type={type} variant={variant} />
}
