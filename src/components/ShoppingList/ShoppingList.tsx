import React, { FC } from 'react';
import styles from './ShoppingList.module.scss';
import Form from 'react-bootstrap/Form';
// @ts-ignore
import AddItemModal from '../AddItemModal/AddItemModal.tsx';
// @ts-ignore
import Item from '../Item/Item.tsx'

interface ShoppingListProps {}

const ShoppingList: FC<ShoppingListProps> = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent(event) {
    event.preventDefault();
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }

  return (
    <>
      <div className={styles.ShoppingList}>
        <h1>Shopping List</h1>
        <p>
          Sort by: 
          <button className={styles.btnlink}>Name</button>
          <button className={styles.btnlink}>Price</button>
        </p>
        <Form className={styles.itemsForm}>
          <ul>
            <li>
              <Item />
            </li>
          </ul>
        </Form>
        <div className='w-100 text-center mb-3'>
          <button className="primaryBtn d-block m-auto" onClick={openFromParent}>
            <span>+</span> Add Item
          </button>
        </div>
        <button className={styles.btnlink}>View completed items</button>
        <Form className={styles.itemsForm}>
          <ul>
            <li>
              <Item />
            </li>
          </ul>
        </Form>
      </div>
      <AddItemModal
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
        onAfterOpen={handleAfterOpen}
      />
    </>
  );
}

export default ShoppingList;
