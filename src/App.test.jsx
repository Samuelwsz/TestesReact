import { render, screen } from "@testing-library/react"
import App from "./App"

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
