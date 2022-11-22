import React, { FC } from "react";
import styles from "./ShoppingListWrapper.module.scss";
// @ts-ignore
import ShoppingList from "../ShoppingList/ShoppingList.tsx";

interface ShoppingListWrapperProps {}

const ShoppingListWrapper: FC<ShoppingListWrapperProps> = () => {
  return (
    <>
      <div className={styles.ShoppingListWrapper}>
        <h1>Shopping List</h1>
        <ShoppingList />
      </div>
    </>
  );
};

export default ShoppingListWrapper;
