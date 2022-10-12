import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allEmail: []
};


export const emailSlice = createSlice({
    name: 'emailInfo',
    initialState,
    reducers: {
        addEmailandPass: (state, { payload }) => {
            state.allEmail.push(payload);
        },
    },

});

export const { addEmailandPass } = emailSlice.actions;

export default emailSlice.reducer;
