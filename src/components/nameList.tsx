interface NameListProps {
  nameList: string[]
}

function NameList({ nameList }: NameListProps) {
  return (
    <ul>
      {nameList.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  )
}

export default NameList
