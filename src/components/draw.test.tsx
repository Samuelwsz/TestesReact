import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Draw from "./draw"

describe("testanto página do sorteio", () => {
  const participantes = ["a", "b", "c"]
  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <BrowserRouter>
        <Draw />
      </BrowserRouter>
    )
    const opcoes = screen.queryAllByRole("option")
    expect(opcoes).toHaveLength(participantes.length)
  })
})
