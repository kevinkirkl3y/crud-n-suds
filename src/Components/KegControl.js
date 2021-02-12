import React from 'react';
import KegInventory from './KegInventory';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state slices
      formVisibleOnPage: false,
      kegInventory: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //Handlers
  handleClick = () => {
    this.setState(prevState => ({
      
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  handleAddingNewKegToInventory = (newKeg) => {
    const newKegInventory = this.state.kegInventory.concat(newKeg);
    this.setState({
      kegInventory: newKegInventory,
      formVisibleOnPage: false
    });
  }
  render(){
    //conditional requirements
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
      onNewKegTapping={this.handleAddingNewKegToInventory}/>;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <KegInventory 
      kegInventory={this.state.kegInventory} 
      onKegSelection={this.handleChangingSelectedKeg}/>;
      buttonText = "Tap New Keg";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }

}
export default KegControl;