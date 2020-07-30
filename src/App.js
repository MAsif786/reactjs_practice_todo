import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from './Todo'
import About from './pages/About'
import Header from './components/layouts/Header'

import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={Todo} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
