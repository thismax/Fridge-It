import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Input, Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as itemActions from '../../actions/itemActions.js';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class itemAddition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  //form to input fridge items
  render() {
    const { itemActions, fridge } = this.props;
    let type = '';
    let username = localStorage.getItem('name');
    
    const handleSubmit = () => {
      const item = {};
      let name = document.getElementById('inputItm');
      item.name = name.value;
      let qty = document.getElementById('inputQty');
      item.quantity = qty.value;
      item.expiry = document.getElementById('expiry').value;
      item.type = type;
      item.user = username;
      itemActions.addItem(item, fridge.id);
      name.value = '';
      qty.value = '';
    }

    const options = [
      {
        key: 1, 
        text: "produce",
        value: "produce"
      },
      {
        key: 2, 
        text: "dairy",
        value: "dairy"
      },
      {
        key: 3, 
        text: "protein",
        value: "protein"
      },
      {
        key: 4, 
        text: "grains and starches",
        value: "grains"
      },
      {
        key: 5, 
        text: "frozen",
        value: "frozen"
      },
      {
        key: 6, 
        text: "miscellaneous",
        value: "misc"
      }
    ]; 

    return (
      <Form 
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Form.Group inline>
          <Form.Input 
            placeholder='Type name here'
            id="inputItm"
          />
          <Form.Input 
            width={2}
            type='number'
            id="inputQty"
          />
          <Form.Select 
            placeholder='Browse categories' 
            options={options} 
            id="inputType"
            onChange={(e, {value}) => {
              type = value;
            }}
          />
          <Form.Select
            placeholder={moment()}
            id="expiry"
            control={DatePicker}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <Form.Button 
            content='Go'
          />
        </Form.Group>
      </Form>
    )
  }
};

const fridgeState = (store) => {
  return {
    fridge: store.fridge.fridge,
    items: store.items.items
  }
};

const fridgeDispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(itemAddition);