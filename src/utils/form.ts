export function getGenderDescription(gender: string) {
  if (gender === "gay") {
    return `You are ${gender}`
  }

  return `Updated gender to ${gender}`
}
