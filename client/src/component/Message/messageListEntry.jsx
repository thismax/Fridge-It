import React, { Component } from 'react';
import { Icon, Button, Form, Card, Image, Popup } from 'semantic-ui-react';

class MessageListEntry extends Component { 
  constructor(props) {
    super(props);
  }
  
  render() {
    const { message, deleteMessages, updateMessages } = this.props;
    const style = {
      textAlign: "center",
    }

    //this method is in charge of the like button. When the thumbs up is clicked, 
    //LikeView will check to see if the current user has liked this post and responds accordingly
    const LikeView = (
      <Button basic color={'black'} icon='thumbs outline up'
      onClick={
        () => {
          if (!message.like.includes(localStorage.getItem('name'))) {
            const msg = {...message, like: [...message.like, localStorage.getItem('name')]};
            updateMessages(msg)
          } else {
            message.like.splice(message.like.indexOf(localStorage.getItem('name')), 1);
            updateMessages(message)
          }
        }
      } /> 
    )

    //this method is in charge of the delete button
    const deleteButton = (
      <Button basic color={'black'} onClick={() => {
          deleteMessages(message.id)
      }}>              
        <Icon name="remove" />
      </Button>
    )
    

    return (
      <Card.Group>
        <Card style={{backgroundColor: "#FFFBBB"}}>
          <Card.Content>
            <div style={style}>
              <Icon name="pin" size="large" color="teal" />
            </div>
            <br/>
            <Card.Header> {message.user.split('@')[0]} </Card.Header>
            <Card.Meta>
              Date: {message.createdAt.split('T')[0]}
              {' '}
              Time: {Math.abs(Number(message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[0]) - 7)}:{message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[1]}:{message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[2]}
            </Card.Meta>
            <Card.Description>
              {message.messageText}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
            <Popup trigger={LikeView} basic>
              <Popup.Content>
                {message.like.length > 1 ? message.like.map(user => {
                  return user !== ' ' ? <p>{user.split('@')[0]}</p> : null;
                }):'no likes yet'}
              </Popup.Content>
            </Popup>
            {
              message.user === localStorage.getItem('name') ? deleteButton : null
            }
          </div>
          </Card.Content>
        </Card>
      </Card.Group>
    ) 
  }
}

export default MessageListEntry;