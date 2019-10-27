import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: '7 days', value: 1 },
  { key: 2, text: '14 days', value: 2 },
  { key: 3, text: '28 days', value: 3 },
  { key: 3, text: '90 days', value: 3 },
]

const DropdownExampleClearable = () => (
  <Dropdown 
  button
  className='icon'
  labeled
  clearable 
  options={options} 
  placeholder='Duration' 
  icon='truck' 
  selection />
)

export default DropdownExampleClearable
