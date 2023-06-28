import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { githubActions } from "../store/Github/GitHub.slice"

const actions = {
    ...githubActions
}

export function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}