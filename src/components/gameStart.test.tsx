import { act, fireEvent, render, screen } from "@testing-library/react"
import GameStart from "./gameStart"
import { BrowserRouter } from "react-router-dom"

describe("comportamento do formulario", () => {
  //teste 1
  test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
    render(
      <BrowserRouter>
        <GameStart />
      </BrowserRouter>
    )

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    )

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
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    )
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
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    )
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
    jest.useFakeTimers()
    render(
      <BrowserRouter>
        <GameStart />
      </BrowserRouter>
    )
    //encontrar no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    )
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

    act(() => {
      jest.runAllTimers()
    })

    errorMessage = screen.queryByRole("alert")
    expect(errorMessage).toBeNull()
  })
})

//teste 5
test("comportamento do botao iniciar a brincadeira", () => {
  render(
    <BrowserRouter>
      <GameStart />
    </BrowserRouter>
  )

  const botao = screen.getByRole("button", {
    name: "Iniciar brincadeira!",
  })

  expect(botao).toBeInTheDocument()
  expect(botao).toBeDisabled()
})

//teste 6
test("comportamento do botao habilitado", () => {
  render(
    <BrowserRouter>
      <GameStart />
    </BrowserRouter>
  )

  const botao = screen.getByRole("button", {
    name: "Iniciar brincadeira!",
  })

  expect(botao).toBeInTheDocument()

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

  // Simule a entrada de nomes e o envio do formulário
  fireEvent.change(input, { target: { value: "a" } })
  fireEvent.submit(screen.getByRole("form"))

  fireEvent.change(input, { target: { value: "aa" } })
  fireEvent.submit(screen.getByRole("form"))

  fireEvent.change(input, { target: { value: "aaa" } })
  fireEvent.submit(screen.getByRole("form"))

  // Verifique se o botão agora está habilitado
  expect(botao).not.toBeDisabled()

  fireEvent.click(botao)

  // Verifique se a navegação ocorreu para "/sorteio"
  expect(window.location.pathname).toBe("/sorteio")
})
