import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Footer from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import Search from './components/Search';
import Filter from './components/Filter';
import Furniture from './Furniture';
import Time from './components/Time';
import { Message, Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">

  
      <header className="App-header">
      <h ><b>Fabelio</b> <h className="App-weak">Finder</h> </h>
          
      </header>
    
      <Grid >
      <Grid.Column floated='left' width={8}>
       <Search/>
      </Grid.Column>
      <Grid.Column floated='right' width={8}>
        <Filter /> <Time/>
        </Grid.Column>
       </Grid>


     <div className="Cards">
     <Furniture/>
     
     </div>
     <div className="footer">
      <a href="https://github.com/Semantic-Org/Semantic-UI-React" target="_blank" class="ui button"><i class="github icon"></i>Visit React Repo</a>
     

      <Message Compact floating size="small">
        You will create a single page application to search and filter furniture products.
       </Message>
      </div> 
    
      

    </div>
/*  footer
    <Footer>
      <a href="https://github.com/Semantic-Org/Semantic-UI-React" target="_blank" class="ui button"><i class="github icon"></i>Visit React Repo</a>
     

      <Message Compact floating size="small">
        You will create a single page application to search and filter furniture products.
       </Message>
      </Footer> */
  );
}

export default App;
