import React from 'react';
import Admin from './pages/Admin/index';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/index'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/login' component={Login}></Route>
        <Route path="/admin" render={() => {
          return (
            <Admin>
            </Admin>
          )
        }}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
