import React, { Component } from 'react'
import Admin from './pages/Admin/index';
import Login from './pages/Login/index'
import Home from './pages/Home/index';
import { HashRouter, Route,Redirect } from 'react-router-dom';
import GoodsGM from './pages/Goods/GoodsGM/index'
import GoodsLB from './pages/Goods/GoodsLB/index'
import AdminiStratorList from './pages/AdminiStrator/AdminiStratorList/index'
import AdminiStratorAdd from './pages/AdminiStrator/AdminiStratorAdd/index'
import PersonalNav from './pages/Personal/Nav/index'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/login' component={Login}></Route>
        <Route path="/admin" render={() => {
          return (
            <Admin>
              <Route path='/admin/home' component={Home}></Route>
              <Route path='/admin/goodsInfo' component={GoodsGM}></Route>
              <Route path='/admin/goodsKind' component={GoodsLB}></Route>
              <Route path='/admin/administrator/adminList' component={AdminiStratorList}></Route>
              <Route path='/admin/administrator/adminAdd' component={AdminiStratorAdd}></Route>
              <Route path='/admin/set' component={PersonalNav}>
              </Route>
            </Admin>
          )
        }}></Route>
        <Redirect exact from='/admin' to='/admin/home'></Redirect>
      </HashRouter>
    </div>
  );

}


export default App;
