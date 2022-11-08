import React, { FC } from 'react';
import styles from './Welcome.module.scss';
import welcomeImage from '../../images/welcome-page-img.png';
// @ts-ignore
import AddItemModal from '../AddItemModal/AddItemModal.tsx';

interface WelcomeProps{};

const Welcome: FC<WelcomeProps> = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal(event, data) {
    console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }

  return (
    <div className={styles.Welcome}>
      <img src={welcomeImage} alt="Welcome Background" />
      <h1>Shopping List</h1>
      <p className={styles.welcomeText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet vero ea nostrum, sit odit recusandae praesentium, animi a at quis pariatur veniam corporis reiciendis ratione delectus! Est ad accusantium nulla!</p>
      <button className="primaryBtn" onClick={openFromParent}><span>+</span> Add Item</button>
      <AddItemModal
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        />
    </div>
  );
}

export default Welcome;
