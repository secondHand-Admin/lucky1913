import React from 'react'
import Admin from './pages/Admin/index';
import Login from './pages/Login/index'
import { HashRouter, Route } from 'react-router-dom';
import GoodsGM from './pages/Goods/GoodsGM/index'
import GoodsLB from './pages/Goods/GoodsLB/index'
import AdminiStratorList from './pages/AdminiStrator/AdminiStratorList/index'
import AdminiStratorAdd from './pages/AdminiStrator/AdminiStratorAdd/index'
import PersonalAlter from './pages/Personal/alter/index'
import PersonalBasic from './pages/Personal/basic/index'
import PersonalBinding from './pages/Personal/binding/index'
// import PersonalNav from './pages/Personal/Nav/index'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/login' component={Login}></Route>
        <Route path="/admin" render={() => {
          return (
            <Admin>
              <Route path='/admin/goodsInfo' component={GoodsGM}></Route>
              <Route path='/admin/goodsKind' component={GoodsLB}></Route>
              <Route path='/admin/administrator/adminList' component={AdminiStratorList}></Route>
              <Route path='/admin/administrator/adminAdd' component={AdminiStratorAdd}></Route>
              <Route path="/admin/set/basic" component={PersonalBasic}></Route>
              <Route path="/admin/set/alter" component={PersonalAlter}></Route>
              <Route path="/admin/set/binding" component={PersonalBinding}></Route>
              {/* <Route path='/admin/set' component={PersonalNav}>

              </Route> */}

            </Admin>
          )
        }}></Route>
      </HashRouter>


    </div>
  );

}


export default App;
