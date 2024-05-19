import React from 'react'

export default function Basket(props) {
    const {basketnumber , apple,children}=props;
  return (
    <div className='basket'>
      <p>{apple} Mango</p>
      <h3>Basket {basketnumber}</h3>
      <p>{children}</p>
    </div>
  )
}
