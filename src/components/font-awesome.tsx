import { Precedence } from "@/utils/types.ts"

export function FontAweSome({ precedence }: Props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        precedence={precedence}
      />
      <meta name="description" content="Tech presso" />
      <i className="fa-solid fa-house"></i>
    </>
  )
}

interface Props {
  precedence?: Precedence
}
