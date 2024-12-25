import React from 'react'

const MyLoader = () => {
    return (
        <div className=' d-flex justify-content-center align-items-center' style={{ minHeight: 448 }}>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default MyLoader