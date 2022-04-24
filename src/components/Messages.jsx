import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp

        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.premium && '👑'}{message.sender.replace('.testnet','')}:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong> <small >{message.datetime}</small><br/>
          {message.text} 
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
