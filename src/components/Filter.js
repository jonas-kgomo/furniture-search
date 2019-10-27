import React from 'react'
import { Dropdown, Button } from 'semantic-ui-react'

const DropdownExampleDivider = () => (
 <Button.Group color='yellow'>
  <Dropdown
    text='Styles'
    icon='filter'
    floating
    labeled
    button
    className='icon'
    
    
  >
     <Dropdown.Menu  >
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider  />
      <Dropdown.Item 
        label={{ color: 'red', empty: true, circular: true }}
        text='Classic'
      />
      <Dropdown.Item
        label={{ color: 'blue', empty: true, circular: true }}
        text='Midcentury'
      />
      <Dropdown.Item
        label={{ color: 'pink', empty: true, circular: true }}
        text='Scandinavian'
      />
       <Dropdown.Item
        label={{ color: 'yellow', empty: true, circular: true }}
        text='Modern'
      />
      
      <Dropdown.Item
        label={{ color: 'teal', empty: true, circular: true }}
        text='Contemporary'
      />
    </Dropdown.Menu>


  </Dropdown>



  </Button.Group>
  
)

export default DropdownExampleDivider
