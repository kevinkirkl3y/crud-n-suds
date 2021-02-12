import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const {keg} = props;
  let quantity = keg.quantity;
  if(parseInt(quantity) === 0){
    quantity = 'This Keg is Cached Out';
  }
  return(
   <>
    <h1>Keg Details:</h1>
    <h3>Beer Name: {keg.name}</h3>
    <p>Brand: {keg.brand}</p>
    <p>Price: ${keg.price}</p>
    <p>Pints Left: {keg.quantity}</p>
   </> 
  )
}
KegDetail.propTypes ={
  keg: PropTypes.object
}

export default KegDetail;