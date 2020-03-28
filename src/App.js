import React from 'react';
import Admin from './pages/Admin/index';
import AdminiStratorList from './pages/AdminiStrator/AdminiStratorList/index'
import AdminiStratorAdd from './pages/AdminiStrator/AdminiStratorAdd/index'
import Personal from './pages/Personal/Nav/index'
import PersonalAlter from './pages/Personal/alter/index'
import {HashRouter,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <HashRouter>
       <Route path="/admin" render={()=>{
         return(
          <Admin>
            <Route path='/admin/administrator/adminList' component={AdminiStratorList}></Route>
            <Route path='/admin/administrator/adminAdd' component={AdminiStratorAdd}></Route>
            <Route path='/admin/set' component={Personal}></Route>
            <Route path='/admin/set/alter' component={PersonalAlter}></Route>   
        </Admin>
         )
       }}></Route>
     </HashRouter>
    </div>
  );
}

export default App;
