import React, {Component} from 'react';
import Contacts from './components/Contacts';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


class Furniture extends Component {
   
    
    state = {
        contacts: [],
        loading: true,
    };



// asynchrounous 
  async  componentDidMount() {
      
        fetch('http://www.mocky.io/v2/5c9105cb330000112b649af8')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data.products, loading: false })
            })
            .catch(console.log)
    }
   
  

    render() {
      
        return (
            <div>
                {this.state.loading ? (
                <div>  
                <Segment>
                        <Dimmer active>
                         <Loader indeterminate>Fetching 🪑 Furniture </Loader>
                        </Dimmer>
                           <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
                </div>
                ) : (
              
              <div>
                    <Contacts  contacts={this.state.contacts} />
               </div>
        )}
            </div>
        );
    }
}

export default Furniture;