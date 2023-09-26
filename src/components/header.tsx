import logocel from "/assets/logopequeno.png"
import logo from "/assets/logo.png"
import participante from "/assets/participante.png"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <div className="bg-blue-500 pt-12">
        <div className="flex gap-3 justify-center flex-col items-center md:flex-row md:items-center">
          {/* Imagem 1 (para telas maiores que md) */}
          <Link to="/">
            <img src={logo} alt="" className="w-96 h-40 md:block hidden" />
          </Link>

          {/* Imagem 1 (para telas menores ou iguais a md) */}
          <Link to="/">
            <img src={logocel} alt="" className="w-72 h-60 md:hidden block" />
          </Link>

          {/* Imagem 2 (para telas maiores que md) */}
          <img src={participante} alt="" className="md:mt-0 mt-4 w-96 h-80 " />
        </div>
      </div>
    </>
  )
}
