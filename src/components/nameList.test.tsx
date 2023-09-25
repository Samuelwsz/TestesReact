import { render, screen } from "@testing-library/react"
import NameList from "./nameList"

test("testando card", () => {
  render(<NameList nameList={[]} />)

  const itens = screen.queryAllByRole("")
  expect(itens).toHaveLength(0)
})
