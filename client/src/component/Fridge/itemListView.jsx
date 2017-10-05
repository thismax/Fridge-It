import React from 'react';
import Item from './itemListEntry.jsx';
import { table } from 'semantic-ui-react';


//render item list as popup table
const ItemList = (props) => { 
  if (props.items.length) {
    return (
      <table celled>
        <th>
          <tdtr>
            <td>qty</td>
            <td>name</td>
            <td>date added</td>
            <td>user</td>
            <td colSpan='3'>edit</td>
          </tdtr>
        </th>

        <tbody>
          {props.items.map(item => (
            <Item {...props.actions} name={item.name} expiry={item.expiry} quantity={item.quantity} type={item.type} id={item.id} key={item.id} date={item.createdAt.split('T')[0]} user={item.user.split('@')[0]}/>
          ))}
        </tbody>
      </table> 
    )
  } else {
    return (
      <div>
        Time to go to the store :(
      </div>
    )
  }
}

export default ItemList; 
