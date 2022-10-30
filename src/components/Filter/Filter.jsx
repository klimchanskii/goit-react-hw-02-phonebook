export const Filter = ({change,filterValue}) => {
    
    return (
        <label>
        Find contact by name
        <br />
          <input type="text"
            value={filterValue}
            name='filter'
            onChange={change}
          />

        </label>

    )
}

