import { preload } from "react-dom"

export const PreloadResource: React.FC = () => {
  preload(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
    { as: "style" },
  )

  return <i className="fa-solid fa-house"></i>
}
