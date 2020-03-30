import React from 'react'
import Admin from './pages/Admin/index';
import Login from './pages/Login/index'
import Home from './pages/Home/index';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import GoodsGM from './pages/Goods/GoodsGM/index'
import GoodsAdd from './pages/Goods/GoodsAdd/index'
import GoodsLB from './pages/Goods/GoodsLB/index'
import AdminiStratorList from './pages/AdminiStrator/AdminiStratorList/index'
import AdminiStratorAdd from './pages/AdminiStrator/AdminiStratorAdd/index'
import PersonalNav from './pages/Personal/Nav/index'

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Redirect exact from='/' to='/login'></Redirect> */}
        <Route path='/login' component={Login}></Route>
        <Route path="/admin" render={() => {
          return (
            <Admin>
              <Switch>
                <Redirect exact from='/admin' to='/admin/home'></Redirect>
                <Route path='/admin/home' component={Home}></Route>
                <Route path='/admin/goodsInfo' component={GoodsGM}></Route>
                <Route path='/admin/goodsAdd' component={GoodsAdd}></Route>
                <Route path='/admin/goodsKind' component={GoodsLB}></Route>
                <Route path='/admin/administrator/adminList' component={AdminiStratorList}></Route>
                <Route path='/admin/administrator/adminAdd' component={AdminiStratorAdd}></Route>
                <Route path='/admin/set' component={PersonalNav}></Route>
              </Switch>
            </Admin>
          )
        }}></Route>

      </HashRouter>
    </div>
  );

}


export default App;
