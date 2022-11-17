import React, { FC, useState, useEffect } from 'react';
import styles from './AddItemModal.module.scss';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

interface AddItemModalProps{
  onCloseModal(event: any, item: any): unknown;
  IsModalOpened: any;
};

const AddItemModal: FC<AddItemModalProps> = (props) => {

  const [item, setItem] = useState({
    name: '',
    price: '',
    isCompleted: false
  });

  function resetItem(item){
    item.name = ''
    item.price = ''
    item.isCompleted = false
    return item
  }

  function onModalClose(event) {
    var itemCloned = { ...item }
    itemCloned = resetItem(itemCloned)
    setItem(itemCloned)
    props.onCloseModal(event, null);
  }

  function nameChange(e)  {
    const itemCloned = { ...item }
    itemCloned.name = e;
    setItem(itemCloned)
  };

  function priceChange(e)  {
    const itemCloned = { ...item }
    itemCloned.price = e;
    setItem(itemCloned)
  };

  function handleSubmit(e) {
    var itemCloned = { ...item }
    itemCloned = resetItem(itemCloned)
    setItem(itemCloned)
    props.onCloseModal(e, item);
  }

  function validate () {
    if(item.name.length > 0 && Number(item.price) > 0 ) return true;
    return false;
  };

  return(
      <Modal
        isOpen={props.IsModalOpened}
        ariaHideApp={false}
        className={styles.AddItemModal}
      >
        <h2>Add Shopping Item</h2>
        <div className={styles.modalBody}>
          <Form id="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formItemName">
              <Form.Label className='bold'>Item Name</Form.Label>
              <Textbox
                attributesInput={{
                  id: 'Name',
                  type: 'text'
                }}
                value={item.name}
                onChange={(value) => nameChange(value)}
                onBlur={() => {}} 
                validationOption={{
                  name: 'Name', 
                  check: true, 
                  required: true 
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formItemPrice">
              <Form.Label className='bold'>Item Price</Form.Label>
              <Textbox
                attributesInput={{
                  id: 'Price',
                  type: 'text'
                }}
                value={item.price} 
                onChange={(value) => priceChange(value)}
                onBlur={() => {}} 
                validationOption={{
                  name: 'Price',
                  type: 'number', 
                  min: 1
                }}
              />
            </Form.Group>
          </Form>
        </div>
        <div className={styles.modalFooter}>
          <button className='secondaryBtn' onClick={e => onModalClose(e)}>Close</button>  
          <Link to='/list'>
            <input 
              className='primaryBtn' 
              type="submit" 
              form="form" 
              value='Add Item' 
              onClick={handleSubmit} 
              disabled={!validate()} 
            />
          </Link>
        </div>
      </Modal> 
  );
}

export default AddItemModal;
