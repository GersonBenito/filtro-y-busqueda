import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from './context/AppContext';
import Layout from './layout/Layout';
import Home from './containers/Home';
import Informacion from './containers/Informacion';
import Productos from './components/Productos';
import NotFound from './containers/NotFound';

function App() {
  return (
    <AppContext.Provider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/informacion' component={Informacion} />
            <Route exact path='/productos' component={Productos} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
