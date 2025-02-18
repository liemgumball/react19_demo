import { Precedence } from "@/utils/types.ts"

export function HoverCSS({ precedence }: Props) {
  return (
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
      integrity="sha512-csw0Ma4oXCAgd/d4nTcpoEoz4nYvvnk21a8VA2h2dzhPAvjbUIK6V3si7/g/HehwdunqqW18RwCJKpD7rL67Xg=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
      precedence={precedence}
    />
  )
}

interface Props {
  precedence?: Precedence
}
