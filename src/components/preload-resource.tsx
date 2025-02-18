import { preinit, preload } from "react-dom"

export function PreloadResource() {
  preinit("src/script.js", { as: "script" })

  preload(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
    {
      as: "style",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
      integrity:
        "sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==",
    },
  )

  return <h2>Preloaded</h2>
}
