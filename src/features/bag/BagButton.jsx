import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BagButton = () => {

    const itemsCount = useSelector((state) => state.bag.items.length)

    const bagIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
    );

    return (
        <Link to="/bag" className={` position-relative ${itemsCount ? "link-primary" : "link-dark"}`} style={{ cursor: "pointer" }}>
            {bagIcon}
            <span className="position-absolute top-50 start-50 translate-middle pt-2" style={{ fontSize: "x-small" }}>
                {itemsCount > 0 ? itemsCount : null}
            </span>
        </Link>
    )
}

export default BagButton