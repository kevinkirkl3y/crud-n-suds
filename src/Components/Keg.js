import React from 'react'; 
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = props.quantity;
  return(
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <li>{props.name } : {quantity} Pints Remaining</li>
      </div>
    </>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
}

export default Keg;
