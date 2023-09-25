import { errorState, listParticipantsState } from "../atom"
import { useRecoilValue, useSetRecoilState } from "recoil"

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listParticipantsState)
  const list = useRecoilValue(listParticipantsState)
  const setError = useSetRecoilState(errorState)
  return (nameParticipant: string) => {
    if (list.includes(nameParticipant)) {
      setError("Nomes duplicados não serão permitidos!")
      return
    }
    return setList((currentList) => [...currentList, nameParticipant])
  }
}
