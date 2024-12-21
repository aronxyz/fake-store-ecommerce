import React from 'react'

const MobilePriceSorter = ({
    tempSortValue,
    onChange
}) => {
    
    const handleRadioChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div className=' d-block d-lg-none'>
            <div class="form-check">
                <input
                    onChange={handleRadioChange}
                    value=""
                    checked={tempSortValue === ""}
                    class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Default (rating)
                </label>
            </div>
            <div class="form-check">
                <input
                    onChange={handleRadioChange}
                    value={"asc"}
                    checked={tempSortValue === "asc"}
                    class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                    Price (low to high)
                </label>
            </div>
            <div class="form-check">
                <input
                    onChange={handleRadioChange}
                    value={"desc"}
                    checked={tempSortValue === "desc"}
                    class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                <label class="form-check-label" for="flexRadioDefault2">
                    Price (high to low)
                </label>
            </div>
        </div>
    )
}

export default MobilePriceSorter