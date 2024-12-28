import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0
};

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        addItem(state, action) {
            let item = state.items.find(extra => extra.id === action.payload.id);
            if (!item) {
                item = { ...action.payload, quantity: 1, amount: action.payload.price };
                state.items.push(item);
                state.total += item.price;
            } else {
                item.quantity += 1;
                item.amount += item.price;
                state.total += item.price;
            }
        },
        removeItem(state, action) {
            let item = state.items.find(extra => extra.id === action.payload.id);
            if (item) {
                state.items = state.items.filter(extra => extra.id !== action.payload.id);
                state.total -= item.amount; 
            }
        },
        increaseQuantity(state, action) {
            let item = state.items.find(extra => extra.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                item.amount += item.price;
                state.total += item.price;
            }
        },
        decreaseQuantity(state, action) {
            let item = state.items.find(extra => extra.id === action.payload.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.amount -= item.price;
                    state.total -= item.price;
                } else {
                    state.items = state.items.filter(extra => extra.id !== action.payload.id);
                    state.total -= item.price;
                }
            }
        }
    }
});

export default bagSlice.reducer;
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = bagSlice.actions;
