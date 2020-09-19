import React from 'react';

import './Contact.css'

const Contact = ({id, name, lastName, phoneNumber, handleClick}) => {
  return (
    <div className={'contact'} onClick={() => handleClick(id)}>
      <div className={'contact-name'}>
      {name} {lastName}
      </div>
      <div className={'contact-phone'}>
        {phoneNumber}
      </div>
    </div>
  )
}

export {Contact};
