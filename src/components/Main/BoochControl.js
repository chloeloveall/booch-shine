import React from 'react';
import NewBoochForm from './NewBoochForm';
import BoochList from './BoochList';
import BoochDetail from  './BoochDetail';
import EditBoochForm from './EditBoochForm';

export default class BoochControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBooch: null,
      mainBoochList: [],
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBooch !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBooch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewBoochToList = (newBooch) => {
    const newMainBoochList = this.state.mainBoochList.concat(newBooch);
    this.setState({
      mainBoochList: newMainBoochList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedBooch = (id) => {
    const selectedBooch = this.state.mainBoochList.filter(booch => booch.id === id)[0];
    this.setState({selectedBooch: selectedBooch});
  }

  handleDeletingBooch = (id) => {
    const newMainBoochList = this.state.mainBoochList.filter(booch =>booch.id !== id);
    this.setState({
      mainBoochList: newMainBoochList,
      selectedBooch: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingBoochInList = (boochToEdit) => {
  const editedMainBoochList = this.state.mainBoochList
    .filter(booch => booch.id !== this.state.selectedBooch.id)
    .concat(boochToEdit);
  this.setState({
      mainBoochList: editedMainBoochList,
      editing: false,
      selectedBooch: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {      
      currentlyVisibleState = <EditBoochForm booch={this.state.selectedBooch} onEditBooch={this.handleEditingBoochInList} />
      buttonText = "Back";
    } else if (this.state.selectedBooch !== null) {
      currentlyVisibleState = <BoochDetail booch={this.state.selectedBooch} onClickingDelete={this.handleDeletingBooch} onClickingEdit = {this.handleEditClick} />
      //back or submit? not sure yet
      buttonText = 'Back';
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBoochForm onNewBoochCreation={this.handleAddingNewBoochToList} />
      buttonText = 'Back';
    } else {
      currentlyVisibleState = <BoochList boochList={this.state.mainBoochList} onBoochSelection={this.handleChangingSelectedBooch} />
      buttonText = "Add Booch";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}