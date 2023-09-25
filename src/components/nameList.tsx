interface NameListProps {
  nameList: string[]
}

export default function NameList({ nameList }: NameListProps) {
  return (
    <ul>
      {nameList.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  )
}
