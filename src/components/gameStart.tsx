import { PlayCircleIcon, UserPlusIcon } from "@heroicons/react/20/solid"
import sacola from "/assets/sacolas.png"
import { FormEvent, useRef, useState } from "react"
import { Link } from "react-router-dom"
import NameList from "./nameList"

export default function GameStart() {
  const [name, setName] = useState<string>("")
  const [nameList, setNameList] = useState<string[]>([])
  const [error, setError] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddName = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    {
      if (name && !nameList.includes(name)) {
        setNameList([...nameList, name])
      } else {
        setError("Nome já existe!") // Define o erro apenas se o nome já existe na lista
        setTimeout(() => {
          setError("")
        }, 3000)
      }
    }
    setName("")

    inputRef.current?.focus()
  }

  return (
    <>
      <div className="bg-orange-100 flex flex-col pb-48">
        <div>
          <h1 className="text-blue-500 font-bold text-3xl text-center pt-10">
            Vamos começar!
          </h1>

          <div className="flex justify-center pt-10">
            <form className="flex" onSubmit={handleAddName}>
              <div className="relative flex items-stretch w-full ">
                <span className="flex items-center justify-center absolute inset-y-0 left-0 pl-6">
                  <UserPlusIcon className="w-5 h-5 text-gray-400 " />
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Insira os nomes dos participantes"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 pl-12 rounded-l-full w-80 md:w-96 lg:w-96 outline-none border  border-b-4 border-black"
                />
                <button
                  disabled={!name}
                  type="submit"
                  className="bg-gray-400 text-black p-2 rounded-r-full pl-5 pr-5 text-sm font-semibold border border-b-4 border-r-4 border-black"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>

          <div className="pt-10 text-center font-semibold">
            {error && <p role="alert">{error}</p>}
            <NameList nameList={nameList} />
            {/* <ul>
              {nameList.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>*/}
          </div>

          <Link to="/sorteio">
            <div className="flex gap-16 justify-center flex-col items-center md:flex-row md:items-center mt-20">
              <button className="flex bg-orange-500 p-4 pl-10 pr-12 rounded-full text-white font-bold text-lg border border-r-4 border-b-4 border-black">
                <PlayCircleIcon className="w-8 h-8 pr-2" />
                Iniciar brincadeira!
              </button>
              <img src={sacola} alt="" className="w-40 h-32" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
