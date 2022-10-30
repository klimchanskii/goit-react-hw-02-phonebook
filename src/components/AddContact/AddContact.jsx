import { Component } from "react";
import {Form,Button} from './AddContact.styled'


export class AddContact extends Component {
    state = {
          number: '',
          name: '',
    }


    handelChange = e => {

    this.setState({
        [e.target.name]:e.target.value
    })
  
    }
    handelSubmit = e => {
        e.preventDefault()
        
        this.props.onSubmit(this.state)

        
        
        
        
         this.reset()
    }


reset = () => {
    this.setState({
       name: '',
       number:'',
    })

  }




    render() {

    return  (
          <Form action=""  onSubmit={this.handelSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handelChange}
          />
        </label>

    

        <label htmlFor="">
          Number
          <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handelChange}
            />
                 
        </label>       
        <Button type="submit">Add Contact</Button>
        </Form>
        
)

    }

}