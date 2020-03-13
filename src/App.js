import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import AddLink from './AddLink';
import Links from './Links'
import Navbar from './Navbar';
import About from './About'
import News from './News'
import Load from './Load'



class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/home" component={AddLink} />
          <Route path="/home" component={Links} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/load" component={Load} />

          
        </div>

      </BrowserRouter>
     
    );
  }
}

export default App;
