import { bindActionCreators } from "redux"
import { useDispatch } from "react-redux"
import { AppActions } from './../store/actions'

const useActions = () => {
   const dispatch = useDispatch()
   return bindActionCreators(AppActions, dispatch)
}

export default useActions