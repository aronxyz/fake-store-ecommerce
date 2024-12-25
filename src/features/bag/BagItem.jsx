import React from 'react'
import ItemQuantitySelector from './ItemQuantitySelector';

const BagItem = ({
  item
}) => {

  const cardTitleStyles = {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className=" container bag-item">
      <div className=" row">
        <div className=" col">
          <img src={item.image} width={96} alt={item.title} />
        </div>
        <div className=" col d-flex flex-column">
          <span className=" fw-semibold" style={cardTitleStyles}>
            {item.title}
          </span>
          <span>{capitalizeFirstLetter(item.category)}</span>
          <span className=" fw-semibold">{item.price}€</span>
        </div>
        <div className=' mt-1'>
          <ItemQuantitySelector parentRef={item} />
        </div>
      </div>
    </div>
  )
}

export default BagItem