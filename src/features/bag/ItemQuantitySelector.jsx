import React from 'react'
import { decreaseQuantity, increaseQuantity, removeItem } from './bagSlice'
import { useDispatch } from 'react-redux';

const ItemQuantitySelector = ({
    parentRef
}) => {

    const trashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
    </svg>

    const dashIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
    </svg>

    const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
    </svg>

    const dispatch = useDispatch()

    // Handle increment
    const handleIncrement = () => {
        dispatch(increaseQuantity(parentRef))
    };

    // Handle decrement, ensuring the quantity doesn't go below 0
    const handleDecrement = () => {
        dispatch(decreaseQuantity(parentRef))
    };

    return (
        <div className='d-flex mt-1'>
            <button
                className='btn btn-primary btn-sm'
                onClick={handleDecrement}
                disabled={parentRef.quantity <= 0} // Disable button if quantity is 0
            >
                {parentRef.quantity === 1 ? trashIcon : dashIcon}
            </button>
            <div
                className='d-flex justify-content-center align-items-center'
                style={{ width: 32 }}
            >
                {parentRef ? parentRef.quantity : 0}
            </div>
            <button
                className='btn btn-primary btn-sm'
                onClick={handleIncrement}
            >
                {plusIcon}
            </button>
        </div>
    )
}

export default ItemQuantitySelector

