import { Squares2X2Icon } from "@heroicons/react/20/solid"
import aviao from "../../public/assets/aviao.png"

export default function Draw() {
  return (
    <>
      <div className="bg-orange-100 flex flex-col pb-32">
        <div>
          <h1 className="text-blue-500 font-bold text-3xl text-center pt-10">
            Quem vai tirar o papelzinho?
          </h1>

          <div className="pt-10">
            <div className="flex flex-col items-center justify-center w-full ">
              <select name="" id="">
                <option value="">a</option>
              </select>
              <p className="pt-3 font-semibold text-xl">
                Clique em em sortear para ver quem é seu amigo secreto!
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center mt-16">
            <Squares2X2Icon className="w-4 h-4" />
            <button className="bg-orange-500 p-4 pl-10 pr-12 rounded-full text-white font-bold text-lg border border-r-4 border-b-4 border-black mb-8">
              Sortear
            </button>
            <img src={aviao} alt="" className="w-40 h-32" />
          </div>
        </div>
      </div>
    </>
  )
}
