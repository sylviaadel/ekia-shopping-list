import React, { FC, useState } from 'react';
import styles from './AddItemModal.module.scss';
import Modal from 'react-modal';
// @ts-ignore
import AddItemForm from '../AddItemForm/AddItemForm.tsx'
import Form from 'react-bootstrap/Form';
import ShoppingListComponent from '../ShoppingList/ShoppingList.tsx'

interface AddItemModalProps{
  onCloseModal(event: any): unknown;
  onAfterOpen(e: any, arg1: string): unknown;
  IsModalOpened: any;
};

const AddItemModal: FC<AddItemModalProps> = (props) => {

  function afterOpenModal(e) {
    props.onAfterOpen(e, 'After Modal Opened');
  }

  function onModalClose(event) {
    props.onCloseModal(event);
  }

  function onSubmitHandler (event) {
    event.preventDefault();
    //alert(item.name)
    props.onCloseModal(event);
  }

  return(
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
        ariaHideApp={false}
        className={styles.AddItemModal}
      >
        <h2>Add Shopping Item</h2>
        <div className={styles.modalBody}>
          <Form className={styles.AddItemForm} id="form" onSubmit={onSubmitHandler}>
            <AddItemForm  />
          </Form>
        </div>
        <div className={styles.modalFooter}>
          <button className='secondaryBtn' onClick={e => onModalClose(e)}>close</button>
          <button className='primaryBtn' type="submit" form="form">Save</button>
          </div>
        <div>
        </div>
      </Modal> 
  );
}

export default AddItemModal;
