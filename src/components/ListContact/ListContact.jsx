import { Wrapper,Item,Button  } from "./ListContact.styled"




export const ListContact = ({contacts,del}) => {


    return(
        <div>
          <Wrapper>
            {contacts.map(({id,name,number}) => {
              return (
                <Item key={id}>
                  <p>{name}</p>
                  <p>{number}</p>
                  <Button type="button" onClick={()=>{del(id)}}>delete</Button>
                </Item>
              )
            })}
          </Wrapper>
        </div>
    )
}