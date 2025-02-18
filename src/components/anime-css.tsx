import { Precedence } from "@/utils/types.ts"

export function AnimateCSS({ precedence }: Props) {
  return (
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      referrerPolicy="no-referrer"
      precedence={precedence}
    />
  )
}

interface Props {
  precedence?: Precedence
}
