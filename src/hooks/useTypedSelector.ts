import { TypedUseSelectorHook, useSelector } from "react-redux"
import { AppState } from './../store/store'

const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

export default useTypedSelector