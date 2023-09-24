import { fireEvent, render, screen } from "@testing-library/react"
import GameStart from "./gameStart"
import { BrowserRouter } from "react-router-dom"

//teste 1
test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(
    <BrowserRouter>
      <GameStart />
    </BrowserRouter>
  )

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

  const botao = screen.getByRole("button", { name: "Adicionar" })

  expect(input).toBeInTheDocument()

  expect(botao).toBeDisabled()
})

//teste 2
test("adicionar um participante caso exista um nome preenchido", () => {
  render(
    <BrowserRouter>
      <GameStart />
    </BrowserRouter>
  )
  //encontrar no DOM o input
  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
  //encontrar o botão
  const botao = screen.getByRole("button", { name: "Adicionar" })

  //inserir o valor no input
  fireEvent.change(input, {
    target: {
      value: "a",
    },
  })

  //clicar no botão de submeter
  fireEvent.click(botao)

  //garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus()

  //garantir que o input não tenha um valor
  expect(input).toHaveValue("")
})
