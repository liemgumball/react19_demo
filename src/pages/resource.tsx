"use server"

import { preload } from "react-dom"
import { wait } from "@/utils/fake-fetch.ts"

const Resource = async () => {
  await wait(2000)
  return (
    <div>
      <h1>Resource</h1>
      {/*<StyleSheet />*/}
      {/*<StyleSheet />*/}
      <PreloadResource />
    </div>
  )
}

export default Resource

function StyleSheet() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        precedence="high"
      />
      <meta name="description" content="Tech presso" />
      <i className="fa-solid fa-house"></i>
    </>
  )
}

function PreloadResource() {
  preload(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
    {
      as: "style",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
      fetchPriority: "high",
    },
  )

  preload(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/webfonts/fa-solid-900.woff2",
    {
      as: "font",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
      fetchPriority: "high",
    },
  )

  preload("script.js", { as: "script" })

  return <i className="fa-solid fa-house"></i>
}
