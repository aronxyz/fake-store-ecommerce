import React from 'react'
import MyRanger from '../../components/MyRanger';

const PriceRanger = ({
    onChange,
    min,
    max
}) => {
    const handleRangeChange = (values) => {
        if (typeof onChange === 'function') {
            onChange(values);
        }
    }
    return (
        <MyRanger onChange={handleRangeChange} min={min} max={max} />
    )
}

export default PriceRanger