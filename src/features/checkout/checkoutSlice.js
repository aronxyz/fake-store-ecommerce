import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deliveryOptions: {
        data: null,
        status: "pending"
    },
    payment: {
        data: null,
        status: "pending"
    },
    total: 0
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        set: (state, action) => {
            const { key, value } = action.payload;
            if (state[key]) {
                state[key].data = value;
                state[key].status = "fulfilled";
            } else {
                console.error(`Invalid key: ${key}`);
            }
        },
        edit: (state, action) => {
            const { section, key, value } = action.payload;
            if (state[section]) {
                state[section][key] = value;
            } else {
                console.error(`Invalid section: ${section}`);
            }
        },
        reset: () => initialState
    }
});

export const { set, edit, reset } = checkoutSlice.actions;
export default checkoutSlice.reducer;
