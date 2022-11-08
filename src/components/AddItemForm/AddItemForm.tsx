import React, { FC, useState } from 'react';
//import styles from './AddItemForm.module.scss';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

interface AddItemFormProps {}

const AddItemForm: FC<AddItemFormProps> = () => {
  const [item, setItem] = useState({
    name: "",
    price: ""
  });

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
  
  return(
    <>
      <Form.Group className="mb-3" controlId="formItemName">
        <Form.Label>Item Name</Form.Label>
        <Textbox
          attributesInput={{
            id: 'Name',
            type: 'text'
          }}
          value={item.name}
          onChange={(value) => nameChange(value)}
          onBlur={(e) => {}} 
          validationOption={{
            name: 'Name', 
            check: true, 
            required: true 
          }}
        />
        <p>{item.name}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formItemPrice">
        <Form.Label>Item Price</Form.Label>
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
        <p>{item.price}</p>

      </Form.Group>
    </>
  )
}

export default AddItemForm;
