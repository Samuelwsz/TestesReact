import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Draw from "../components/draw"
import GameStart from "../components/gameStart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GameStart />,
      },
      {
        path: "/sorteio",
        element: <Draw />,
      },
    ],
  },
])
