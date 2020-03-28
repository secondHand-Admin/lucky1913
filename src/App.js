import React from 'react';
import Admin from './pages/Admin/index';
import UserList from './pages/User/UserList/index'
import UserAdd from './pages/User/UserAdd/index'
import {HashRouter,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <HashRouter>
       <Route path="/admin" render={()=>{
         return(
          <Admin>
            <Route path='/admin/userlist' component={UserList}></Route>
            <Route path='/admin/useradd' component={UserAdd}></Route>

        </Admin>
         )
       }}></Route>
     </HashRouter>
    </div>
  );
}

export default App;
