import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Draw from "../components/draw"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sorteio",
        element: <Draw />,
      },
    ],
  },
])
