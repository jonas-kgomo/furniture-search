import _ from 'lodash'
import faker from '../faker'
import React, { Component } from 'react'
import { Search, Divider, Label, Grid, Input, Header, Segment, Button } from 'semantic-ui-react'
import Contacts from './Contacts'

const initialState = { isLoading: false, results: [], value: '' }

//const s = _.times(7, () => ({
//  title: products.name(),
//  description: faker.company.catchPhrase(),
//  image: faker.internet.avatar(),
//  price: faker.finance.amount(0, 100, 2, '$'),
//}))
// asynchrounous 



//const faker = faker;

export default class SearchExampleStandard extends Component {
  state = initialState


  
  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(faker, isMatch),
      })
    }, 300)
  }

 
  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={7}>
          
          <Search
          color='yellow'
         icon='asterisk'
         labelPosition='left corner'
         placeholder='Search...'
         type='text'
          loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
          
        </Grid.Column>
    
      </Grid>
      
      

      
    )
  }
}



 /* 
<Grid.Column width={10}>
<Segment>
  <Header>State</Header>
  <pre style={{ overflowX: 'auto' }}>
    {JSON.stringify(this.state, null, 2)}
  </pre>
  <Header>Options</Header>
  <pre style={{ overflowX: 'auto' }}>
    {JSON.stringify(faker, null, 2)}
  </pre>
</Segment>
</Grid.Column> */