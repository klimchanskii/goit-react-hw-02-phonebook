import { Component } from "react";
import { nanoid } from 'nanoid'
import { AddContact } from "./AddContact/AddContact";
import { ListContact } from "./ListContact/ListContact";
import { Filter } from "./Filter/Filter";

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],  
    filter: ''
  
  }
  

  testhandelSubmit = data => {

    const contact = {
        id: nanoid(5),
        name: data.name,
      number: data.number
    }
    if (this.state.contacts.find(contac => contac.name === data.name )) {
      alert(`${data.name} is already in contact`)
    } else {
      this.setState(prevState =>({
      contacts:[...prevState.contacts,contact]
     
    }))
    }
  }

  handelFilterChange = e => {

    this.setState({
      filter: e.target.value
    })
  }

  deletContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=> contact.id !== id)
    }))

  }


  render() {
    
    const normalizerFilter = this.state.filter.toLocaleLowerCase()
    const visible = this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizerFilter))
    return (
      <div>
            <h1>Phonebook</h1>
        <AddContact onSubmit={this.testhandelSubmit} />
        <h2>Contacts</h2>
        <Filter change={this.handelFilterChange } filterValue={this.state.filter} />
        <ListContact contacts={visible } del={ this.deletContact} />


      </div>

      
    
    )
  }
  
};
