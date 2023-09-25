import { fireEvent, render, screen } from "@testing-library/react"
import GameStart from "./gameStart"
import { BrowserRouter } from "react-router-dom"
import { error } from "console"

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

//teste 3
test("nomes duplicados não podem ser adicionados na lista", () => {
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

  //inserir o valor no input
  fireEvent.change(input, {
    target: {
      value: "a",
    },
  })
  //clicar no botão de submeter
  fireEvent.click(botao)

  //mensagem de erro
  const errorMessage = screen.getByRole("alert")

  expect(errorMessage.textContent).toBe("Nome já existe!")
})

//teste 4
test("a mensagem de erro deve sumir após os timers", () => {
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

  //inserir o valor no input
  fireEvent.change(input, {
    target: {
      value: "a",
    },
  })
  //clicar no botão de submeter
  fireEvent.click(botao)

  //mensagem de erro
  let errorMessage = screen.queryByRole("alert")

  expect(errorMessage).toBeInTheDocument()

  errorMessage = screen.queryByRole("alert")
  expect(errorMessage).toBeNull()
})
