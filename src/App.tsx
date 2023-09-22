import "./styles/global.css"
import Header from "./components/header"
import GameStart from "./components/gameStart"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"

function App() {
  return (
    <>
      <Header />

      <GameStart />
    </>
  )
}

export default App
