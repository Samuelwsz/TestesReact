import "./styles/global.css"
import Header from "./components/header"
import GameStart from "./components/gameStart"
import Draw from "./components/draw"

function App() {
  return (
    <>
      <Header />
      <Draw />
      <GameStart />
    </>
  )
}

export default App
