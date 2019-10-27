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
        text='Important'
      />
      <Dropdown.Item
        label={{ color: 'blue', empty: true, circular: true }}
        text='Announcement'
      />
      <Dropdown.Item
        label={{ color: 'black', empty: true, circular: true }}
        text='Discussion'
      />
    </Dropdown.Menu>


  </Dropdown>



  </Button.Group>
  
)

export default DropdownExampleDivider
