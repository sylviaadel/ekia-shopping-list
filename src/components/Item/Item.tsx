import React, { FC, useState } from 'react';
import styles from './ItemList.module.scss';
import imgIcon from '../../images/img-icon.png'

interface ItemProps {}

const Item: FC<ItemProps> = () => {

  const [item, setItem] = useState({
    name: "",
    price: ""
  });

  return(
    <>
      <div className="form-check">
        <div>
          <input className="form-check-input" type="checkbox" id="check1" name="option1" />
          <label className="form-check-label" id="itemName">{item.name}Name</label>
          <label className='form-check-label bold mx-2' id="itemPrice">{item.price} SEK</label>
        </div>
        <img src={imgIcon} />
      </div>
    </>
  );
}

export default Item;
