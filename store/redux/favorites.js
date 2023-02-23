import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    // initial state as an object
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
            // we are adding to the ids from the abovementioned state the id from the action object;
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        },
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
// exporting actions so that we can dipatch / invoke these actions / functions
export default favoritesSlice.reducer;