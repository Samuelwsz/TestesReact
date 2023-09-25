import "./styles/global.css"
import Header from "./components/header"
import { Outlet } from "react-router-dom"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <>
      <Header />
      <RecoilRoot>
        <Outlet />
      </RecoilRoot>
    </>
  )
}

export default App
