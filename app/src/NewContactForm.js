import React from 'react';

import './NewContact.css'

class NewContactForm extends React.Component {

  state = {
    name: '',
    lastName: '',
    phoneNumber: ''
  }

  onInputChanged = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = () => {
    this.setState({
      name: '',
      lastName: '',
      phoneNumber: ''
    })

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className={'new-contact'}>
        <div className={'new-contact__person-data'}>
          <input type="text" name={'name'} value={this.state.name} placeholder={'name'} onChange={this.onInputChanged}/>
          <input type="text" name={'lastName'} value={this.state.lastName} placeholder={'Last name'} onChange={this.onInputChanged}/>
        </div>
        <div className={'new-contact__person-phone'}>
          <input type="number" name={'phoneNumber'} value={this.state.phoneNumber} placeholder={'+48 ...'} onChange={this.onInputChanged}/>
          <button onClick={this.onSubmit}>Dodaj</button>
        </div>
      </div>
    )
  }

}

export {NewContactForm};
