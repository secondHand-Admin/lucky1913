import React from 'react';
import Admin from './pages/Admin/index';

import UserList from './pages/User/UserList/index'
import UserAdd from './pages/User/UserAdd/index'
import Login from './pages/Login/index'
import { HashRouter, Route } from 'react-router-dom';
import GoodsGM from './pages/Goods/GoodsGM/index'
import GoodsLB from './pages/Goods/GoodsLB/index'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/login' component={Login}></Route>
       <Route path="/admin" render={()=>{
         return(
          <Admin>
            <Route path='/admin/userlist' component={UserList}></Route>
             <Route path='/admin/useradd' component={UserAdd}></Route>
             <Route path='/admin/goodsInfo' component={GoodsGM}></Route>
             <Route path='/admin/goodsKind' component={GoodsLB}></Route>

        </Admin>
         )
       }}></Route>
     </HashRouter>


    </div>
  );
}

export default App;
