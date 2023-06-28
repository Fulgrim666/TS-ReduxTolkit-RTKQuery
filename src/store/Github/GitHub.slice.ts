import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const LS_FAV_KEY = 'RFK'
interface GitHubState {
     favorites: string[]
}

const initialState: GitHubState = {
    favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}



export const gitHubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavirite(state, action: PayloadAction<string>) {
            state.favorites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        },
        removeFavorite(state, action: PayloadAction<string>) {
            state.favorites = state.favorites.filter(f=> f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites))
        }
    }
})

export const githubActions = gitHubSlice.actions
export const githubReducer = gitHubSlice.reducer