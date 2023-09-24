import { render, screen } from "@testing-library/react"
import GameStart from "./gameStart"

test("quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<GameStart />)

  const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

  /* const botao = screen.getByRole("button")*/

  expect(input).toBeInTheDocument()
})
