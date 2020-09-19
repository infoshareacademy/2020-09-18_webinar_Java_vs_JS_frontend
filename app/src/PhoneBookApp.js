import React from 'react';
import './App.css';
import {Contact} from "./Contact";
import {NewContactForm} from "./NewContactForm";

class PhoneBookApp extends React.Component {

  state = {
    phoneBook: []
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = () => {
    fetch('http://51.83.254.231:8080/person')
      .then(response => response.json())
      .then(data => {
        this.setState({
          phoneBook: data
        })
      })
  }

  addContact = (contact) => {
    console.log(27, 'test');
    fetch('http://51.83.254.231:8080/person', {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.fetchContacts();
    })
  }

  removeContact = (id) => {
    fetch(`http://51.83.254.231:8080/person/${id}`, {
      method: "DELETE",
    }).then(() => {
      this.fetchContacts();
    })
  }


  render() {
    return (
      <div className={'app'}>
        <div className={'phone-book'}>
          {this.state.phoneBook.map((person) => {
              return <Contact
                key={person.id}
                id={person.id}
                name={person.name}
                lastName={person.lastName}
                phoneNumber={person.phoneNumber}
                handleClick={this.removeContact}
              >
              </Contact>
            })
          }
          <NewContactForm onSubmit={this.addContact}/>

        </div>
      </div>
    );
  }
}

export {PhoneBookApp};
