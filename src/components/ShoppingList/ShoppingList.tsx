import React, { FC } from 'react';
import styles from './ShoppingList.module.scss';
// @ts-ignore
import ActiveList from '../ActiveList/ActiveList.tsx'

interface ShoppingListProps {}

const ShoppingList: FC<ShoppingListProps> = () => {
  
  return (
    <>
      <div className={styles.ShoppingList}>
        <h1>Shopping List</h1>
        <ActiveList />
      </div>
    </>
  );
}

export default ShoppingList;
