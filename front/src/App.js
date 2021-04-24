import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import JobsPage from './containers/JobsPage/JobsPage';
import HomePage from './containers/home/HomePage';
import AddResume from './components/AddResume/AddResume';
import Auth from './containers/Auth/Auth';

import './assets/css/bootstrap.min.css';
import './assets/css/line-awesome.css';
import './assets/css/fontawesome.min.css';
import './assets/css/style2.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import './App.css';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/jobs' component={JobsPage} />
            <Route path='/auth' component={Auth} />
            <Route path='/' exact component={HomePage} />
            <Route path='/add-resume' exact component={AddResume} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
