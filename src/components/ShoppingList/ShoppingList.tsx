import React, { FC, useState, useEffect } from 'react';
import styles from './ShoppingList.module.scss';
import Form from 'react-bootstrap/Form';
import imgIcon from '../../images/img-icon.png'
// @ts-ignore
import AddItemModal from '../AddItemModal/AddItemModal.tsx';

interface ShoppingListProps {}

const ShoppingList: FC<ShoppingListProps> = (props) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showList, setShowList] = useState(false);
  const [itemList, setItemList] = useState<any[]>(localStorage.getItem('item') == null ? [] : JSON.parse(localStorage.getItem('item')));

  useEffect(() => localStorage.setItem("item" , JSON.stringify(itemList)), [itemList])

  function openFromParent(event) {
    event.preventDefault();
    setIsOpen(true);
  }

  function handleCloseModal(e, item) {
    setIsOpen(false);
    if(item == null) return;
    var itemListCLoned = [...itemList]
    itemListCLoned.push(item)
    setItemList(itemListCLoned)
  }

  function sortByName(){
    var itemListCloned = [...itemList ]
    itemListCloned.sort((a, b) => (a.name > b.name) ? 1 : -1)
    setItemList(itemListCloned)
  }

  function sortByPrice(){
    var itemListCloned = [...itemList]
    itemListCloned.sort(({price:a}, {price:b}) => a-b);
    setItemList(itemListCloned)
  }

  function isCompleted(index, isChecked){
    var listCloned = [...itemList];
    listCloned[index].isCompleted = isChecked
    setItemList(listCloned)
  }

  return(
    <>
      <div className={styles.ShoppingList}>
      <p>
          Sort by: 
          <button className='btnlink' onClick={sortByName}>Name</button>
          <button className='btnlink' onClick={sortByPrice}>Price</button>
        </p>
        <Form className={styles.itemsForm}>
          <ul>
            {itemList.map((item, index) => (
              !item.isCompleted ? <li className="form-check" key={index}>
                <div>
                  <input className="form-check-input" type="checkbox" checked={item.isCompleted} onChange={(e) => {isCompleted(index, e.target.checked)}} />
                  <label className="form-check-label">{item.name}</label>
                  <label className='form-check-label bold mx-2'>{item.price} SEK</label>
                </div>
                <img src={imgIcon} alt='default List Image' /> 
              </li> : <div></div>
            ))}
          </ul>
        </Form>
        <div className='w-100 text-center mb-3'>
          <button className="primaryBtn d-block m-auto" onClick={openFromParent}>
            <span>+</span> Add Item
          </button>
        </div>
      </div>
      <div className={styles.CompletedList}>
        <button className='btnlink mb-3' onClick={() => setShowList(!showList)} disabled={(itemList.some(a=>a.isCompleted == true) ? false : true )}>
          View completed items
        </button>
        {showList &&
          <Form className={styles.itemsForm}>
            <ul>
              {itemList.map((item, index) => (
                item.isCompleted ? <li className="form-check" key={index}>
                <div>
                  <input className="form-check-input" type="checkbox" checked={item.isCompleted} onChange={(e) => {isCompleted(index, e.target.checked)}}  />
                  <label className="form-check-label">{item.name}</label>
                  <label className='form-check-label bold mx-2'>{item.price} SEK</label>
                </div>
                <img src={imgIcon} alt='Default List Image' />
              </li> : <></>
              ))}
            </ul>
          </Form>
        }
      </div>
      <AddItemModal
        IsModalOpened={modalIsOpen}
        onCloseModal= {handleCloseModal}
      />
    </>
  );
}

export default ShoppingList;
