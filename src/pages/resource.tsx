"use server"

import { PreloadResource } from "@/components/preload-resource.tsx"

const Resource = () => {
  return (
    <div className="mx-auto space-y-4">
      <h1 className="text-center text-4xl font-bold">Resource</h1>
      {/*<FontAweSome precedence="default" />*/}
      {/*<FontAweSome precedence="default" />*/}
      {/*<FontAweSome precedence="default" />*/}
      {/*<FontAweSome precedence="default" />*/}
      {/*<FontAweSome precedence="default" />*/}
      {/*<FontAweSome precedence="default" />*/}
      <PreloadResource />
    </div>
  )
}

export default Resource
