import React, { FC, useState } from "react";
import styles from "./Welcome.module.scss";
import welcomeImage from "../../images/welcome-page-img.png";
// @ts-ignore
import AddItemModal from "../AddItemModal/AddItemModal.tsx";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [itemList, setItemList] = useState<any[]>(
    localStorage.getItem("item") == null
      ? []
      : JSON.parse(localStorage.getItem("item"))
  );

  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal(e, item) {
    setIsOpen(false);
    if (item == null) return;
    var itemListCLoned = [...itemList];
    itemListCLoned.push(item);
    setItemList(itemListCLoned);
    localStorage.setItem("item", JSON.stringify(itemListCLoned));
  }

  return (
    <div className={styles.Welcome}>
      <img src={welcomeImage} alt="Welcome Background" />
      <h1>EKIA's Shopping List</h1>
      <p className={styles.welcomeText}>
        Welcome to Ekia's shopping list. Here you will be able to create a todo
        list with all the furniture you want to buy. <br />
        <br />
        To get started press the Add new item button and a popup will ask you
        the name and price of the item you want to add. You can also add an
        image after the item is added by touching the camera icon.
      </p>
      <button className="primaryBtn" onClick={openFromParent}>
        <span>+</span> Add Item
      </button>
      <AddItemModal
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default Welcome;
