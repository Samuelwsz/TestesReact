import { Squares2X2Icon } from "@heroicons/react/20/solid"
import aviao from "/assets/aviao.png"
import { useParams } from "react-router-dom"
import { ChangeEvent, useState } from "react"

export default function Draw() {
  const { nameList } = useParams<{ nameList?: string }>()
  // Split the comma-separated string into an array
  const nameListArray = nameList ? nameList.split(",") : []

  const [selectOption, setSelectOption] = useState<string | undefined>(
    undefined
  )

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value)
  }
  return (
    <>
      <div className="bg-orange-100 flex flex-col pb-32">
        <div>
          <h1 className="text-blue-500 font-bold text-3xl text-center pt-10">
            Quem vai tirar o papelzinho?
          </h1>

          <div className="pt-10">
            <div className="flex flex-col items-center justify-center w-full ">
              <select
                name=""
                id=""
                value={selectOption || ""}
                onChange={handleSelectChange}
                className="p-3 rounded-full w-48 md:w-96 lg:w-96 outline-none mb-3 border border-r-4 border-b-4 border-black "
              >
                {nameListArray.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              {/*mostar aqui a opção que foi selecionada*/}
              {selectOption && (
                <p className="pt-3 font-semibold text-xl">
                  Opção selecionada: {selectOption}
                </p>
              )}
              <p className="pt-3 font-semibold text-xl">
                Clique em em sortear para ver quem é seu amigo secreto!
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center mt-16">
            <button className="flex bg-orange-500 p-4 pl-10 pr-12 rounded-full text-white font-bold text-lg border border-r-4 border-b-4 border-black mb-8">
              <Squares2X2Icon className="w-8 h-8 pr-2" />
              Sortear!
            </button>
            <img src={aviao} alt="" className="w-40 h-32" />
          </div>
        </div>
      </div>
    </>
  )
}
