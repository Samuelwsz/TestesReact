import "./styles/global.css"
import Header from "./components/header"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      aaa
      <Header />
      <Outlet />
    </>
  )
}

export default App
