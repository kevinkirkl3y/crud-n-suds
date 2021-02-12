import React from 'react'; 
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = props.quantity;
  return(
    <>
      <li>{props.name} : {quantity}</li>
    </>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired
}

export default Keg;
