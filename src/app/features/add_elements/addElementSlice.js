import { createSlice } from "@reduxjs/toolkit"








let addElementSlice = createSlice({
    name: 'ankit_ass',
    initialState: {
        value: []
    },
    reducers: {
        afunction: function (state, action) {
            /* console.log(state)
            console.log(action)
            state.value = [...(state.value),action.payload] */

            state.value.push(action.payload)
        }
    }

});


// destucture
export const { afunction } = addElementSlice.actions;

export default addElementSlice.reducer