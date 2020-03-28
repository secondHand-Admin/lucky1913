import React, { Component } from 'react'
import Admin from './pages/Admin/index';
import Login from './pages/Login/index'
import AdminiStratorList from './pages/AdminiStrator/AdminiStratorList/index'
import AdminiStratorAdd from './pages/AdminiStrator/AdminiStratorAdd/index'
import PersonalNav from './pages/Personal/Nav'
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route  path='/login' component={Login}></Route>
          <Route path="/admin" render={() => {
            return (
              <Admin>
                <Route path='/admin/administrator/adminList' component={AdminiStratorList}></Route>
                <Route path='/admin/administrator/adminAdd' component={AdminiStratorAdd}></Route>
                <Route path='/admin/set' component={PersonalNav}>
                  
                </Route>
              </Admin>
            )
          }}></Route>
        </HashRouter>
      </div>
    )
  }
}


export default App;
