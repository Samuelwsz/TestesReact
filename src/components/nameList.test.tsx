import { render, screen } from "@testing-library/react"
import NameList from "./nameList"

//teste 1
describe("uma lista de participantes", () => {
  test("testando card", () => {
    render(<NameList nameList={[]} />)

    const itens = screen.queryAllByRole("listitem")
    expect(itens).toHaveLength(0)
  })
})

//teste 2
test("testando card com participantes", () => {
  const participants = ["a", "aa"]
  render(<NameList nameList={participants} />)

  const itens = screen.queryAllByRole("listitem")
  expect(itens).toHaveLength(participants.length)
})
