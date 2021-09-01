import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/pages/Inicio';
import Maxlaudos from './components/pages/Maxlaudos';
import Telerradiologia from './components/pages/Telerradiologia';
import Contato from './components/pages/Contato';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/maxlaudos' component={Maxlaudos} />
        <Route path='/telerradiologia' component={Telerradiologia} />
        <Route path='/contato' component={Contato} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
