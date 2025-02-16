import { wait } from "@/utils/fake-fetch.ts"

export async function updateGender(gender: string): Promise<string | void> {
  await wait(1000)

  //
  if (!gender) {
    return Promise.resolve("Can not be empty?")
  }

  if (gender === "not gay") {
    return Promise.resolve("Why?")
  }

  return Promise.resolve()
}
