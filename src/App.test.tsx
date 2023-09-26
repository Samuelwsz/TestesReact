import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

describe("Jest", () => {
  it("should display elements", () => {
    render(<App />)
    expect(screen.debug())
  })
})

/*Vite + React + TS*/

test("jest", () => {
  render(<App />)
  const linkElement = screen.getByText(/aaa/)
  expect(linkElement).toBeInTheDocument()
})

describe("a pagina de configuração", () => {
  test("deve ser renderizado corretamente", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
