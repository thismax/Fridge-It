import React from 'react';
import { Table, Icon, Card } from 'semantic-ui-react';


//fill rows with items and buttons to edit
const Item = (props) => {
  return (
    <Table.Row>
      <Table.Cell textAlign="center">{props.quantity}</Table.Cell>
      <Table.Cell textAlign="left">{props.name}</Table.Cell>
      <Table.Cell>
          <Icon 
            size="small"
            onClick={(e) => {
              e.preventDefault();
              props.updateItem({
              name: props.name, 
              quantity: props.quantity + 1,
              type: props.type
            }, props.id)}}
            name="plus"
          ></Icon>
        </Table.Cell>
        <Table.Cell>
          <Icon 
            name="minus"
            size="small"
            onClick={(e) => {
              e.preventDefault();
              props.updateItem({
              name: props.name,
              quantity: props.quantity - 1,
              type: props.type
            }, props.id)}}
          ></Icon>
        </Table.Cell>
        <Table.Cell>
          <Icon 
            name="remove"
            size="small"
            onClick={(e)=> {
              e.preventDefault();
              props.deleteItem(props.id)}}
          ></Icon>
        </Table.Cell>
    </Table.Row>
  )
}

export default Item;