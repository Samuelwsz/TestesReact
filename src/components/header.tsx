import logocel from "../../public/assets/logo-pequeno.png"
import logo from "../../public/assets/logo.png"
import participante from "../../public/assets/participante.png"

export default function Header() {
  return (
    <>
      <div className="bg-blue-500 pt-14">
        <div className="flex gap-3 justify-center flex-col items-center md:flex-row md:items-center">
          {/* Imagem 1 (para telas maiores que md) */}
          <img src={logo} alt="" className="w-96 h-40 md:block hidden" />

          {/* Imagem 1 (para telas menores ou iguais a md) */}
          <img src={logocel} alt="" className="w-72 h-60 md:hidden block" />

          {/* Imagem 2 (para telas maiores que md) */}
          <img src={participante} alt="" className="md:mt-0 mt-4 w-96 h-80 " />
        </div>
      </div>
    </>
  )
}
