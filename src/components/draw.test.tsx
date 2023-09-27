import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import Draw from "./draw"

// Crie uma função mock para useParams
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Mantenha as implementações reais de outros métodos
  useParams: () => ({ nameList: "a,b,c" }), // Simule o valor de nameList
}))

describe("testando página do sorteio", () => {
  //teste 1
  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <BrowserRouter>
        <Draw />
      </BrowserRouter>
    )
    const opcoes = screen.queryAllByRole("option")
    expect(opcoes).toHaveLength(3) // Agora você pode usar o valor esperado diretamente, já que o mock foi configurado.
  })

  //teste 2
  test("cada participante não sorteie o proprio nome", () => {
    const nameList = "Alice,Bob,Charlie,David"

    // Renderize o componente Draw com a lista de nomes
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={[`/draw/${nameList}`]}>
        <Draw />
      </MemoryRouter>
    )

    // Selecione um nome na lista
    const selectElement = getByTestId("select-element")

    fireEvent.change(selectElement, { target: { value: "Alice" } })

    // Clique no botão "Sortear"
    const sortearButton = getByText("Sortear!")
    fireEvent.click(sortearButton)

    // Verifique se o nome sorteado é diferente do nome selecionado
    const drawnName = getByTestId("sorteado")
    expect(drawnName.textContent).not.toContain("Alice")
  })

  //teste 3
  test("o amigo secreto é exibido quando solicitado", () => {
    const participantes = ["a", "aa", "aaa"]
    render(
      <BrowserRouter>
        <Draw />
      </BrowserRouter>
    )

    const select = screen.getByPlaceholderText("Selecione o seu nome")

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    })

    const botao = screen.getByRole("button", { name: "Sortear!" })

    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole("alert")

    expect(amigoSecreto).toBeInTheDocument()
  })
})
