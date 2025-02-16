"use client"

import { Button, ButtonProps } from "@/components/ui/button.tsx"
import React from "react"
import { requestFormReset } from "react-dom"

// fix typing
export const ResetFormButton: React.FC<Props> = ({
  onClick: _,
  type = "button",
  variant = "secondary",
  ...props
}) => {
  const onClick = () => {
    if (!props.formref.current) return

    requestFormReset(props.formref.current)
  }

  return (
    <Button
      {...props}
      onClick={onClick}
      type={type}
      variant={variant}
      className="w-full"
    />
  )
}

interface Props extends ButtonProps {
  formref: React.RefObject<HTMLFormElement | null>
}
