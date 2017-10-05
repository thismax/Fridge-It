import React from 'react';
import { Table, icon, Card } from 'semantic-ui-react';


//fill rows with items and buttons to edit
const Item = (props) => {
  return (
    <tr>
      <td textAlign="center">{props.quantity}</td>
      <td textAlign="left">{props.name}</td>
      <td textAlign="left">{props.date}</td>
      <td textAlign="left">{props.user}</td>
      <td>
          <icon 
            onClick={(e) => {
              e.preventDefault();
              props.updateItem({
              name: props.name, 
              quantity: props.quantity + 1,
              type: props.type
            }, props.id)}}
          ></icon>
        </td>
        <td>
          <icon 
            onClick={(e) => {
              e.preventDefault();
              props.updateItem({
              name: props.name,
              quantity: props.quantity - 1,
              type: props.type
            }, props.id)}}
          ></icon>
        </td>
        <td>
          <icon 
            onClick={(e)=> {
              e.preventDefault();
              props.deleteItem(props.id)}}
          ></icon>
        </td>
    </tr>
  )
}

export default Item;