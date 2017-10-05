import React, { Component } from 'react';

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
      <button 
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
      <button basic color={'black'} onClick={() => {
          deleteMessages(message.id)
      }}>              
      </button>
    )
    

    return (
      <div class="card">
        <div class="card" style={{backgroundColor: "#FFFBBB"}}>
          <div>
            <div style={style}>
            </div>
            <br/>
            <h3> {message.user.split('@')[0]} </h3>
            <span>
              Date: {message.createdAt.split('T')[0]}
              {' '}
              Time: {Math.abs(Number(message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[0]) - 7)}:{message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[1]}:{message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[2]}
            </span>
            <span>
              {message.messageText}
            </span>
          <span>
          <span>
          <div className='ui two buttons'>
            <span trigger={LikeView} basic>
              <div>
                {message.like.length > 1 ? message.like.map(user => {
                  return user !== ' ' ? <p>{user.split('@')[0]}</p> : null;
                }):'no likes yet'}
              </div>
            </span>
            {
              message.user === localStorage.getItem('name') ? deleteButton : null
            }
          </div>
          </span>
        </span>
      </div>
      </div>
      </div>
    ) 
  }
}

export default MessageListEntry;