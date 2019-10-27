import React from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';
import '../App.css';

 const Contacts = ({ contacts }) => {
      return (
        <div>

          {/* <center><h1>Furniture List</h1></center> */}


          <Card.Group itemsPerRow={2} width={5} >
               {contacts.map((products) => (
            <Card raised>
              <div>
                <h5 class="card-title">{products.name}   <Icon name='tags'color="grey" size="small" /></h5> 
                  <div id="descript">{products.description}</div>
                  
                  <h6 class="card-subtitle mb-2 text-muted">{products.furniture_styles}</h6>
                   
              
                 <div className="items-grid">
                  <div>
                  <Label size="mini"  attached="bottom left">
                  <Label.Detail >Delivery Time  </Label.Detail>
                  <b >&nbsp;&nbsp;</b>
                       <Icon name='hourglass half' />
                      {products.delivery_time} 
                      <i> days</i>
                      
                  
                 </Label>
                 </div>

                 <div>
                 <Label as='a' color='teal' size="mini" attached="bottom right" tag>
                    Price Rp <b>{products.price} </b>
                 </Label>
                 </div>
                
                 </div>     
              </div>
            </Card>

          ))}
          
          </Card.Group>
        </div>
      )
    };

export default Contacts