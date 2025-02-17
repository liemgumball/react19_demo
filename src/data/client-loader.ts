import { preload } from "react-dom"
import { ClientLoaderFunctionArgs } from "react-router"

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  preload("script.js", { as: "script" })

  return await serverLoader()
}
