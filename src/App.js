import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WifiSetup } from './components/WifiSetup';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wifi-setup" component={WifiSetup} />
            <Route component={Home} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
