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
import PersonalAlter from './pages/Personal/alter/index'
import PersonalBasic from './pages/Personal/basic/index'
import PersonalBinding from './pages/Personal/binding/index'
<<<<<<< HEAD
import Analysis from './pages/AnalysisData'
=======
import Userlist from './pages/User/Userlist'
>>>>>>> e840ac1ea5536a4f11775811bc24bd0fb7619d4a
// import PersonalNav from './pages/Personal/Nav/index'
function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Redirect exact from='/' to='/login'></Redirect> */}
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
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
                  <Route path="/admin/set/basic" component={PersonalBasic}></Route>
                  <Route path="/admin/set/alter" component={PersonalAlter}></Route>
                  <Route path="/admin/set/binding" component={PersonalBinding}></Route>
                  <Route exact path="/admin/echarts/pie" component={Analysis}></Route>
                  <Route exact path="/admin/echarts/line" component={Analysis}></Route>
                  <Route exact path="/admin/echarts/bar" component={Analysis}></Route>
                  <Route path="/admin/user/userlist" component={Userlist}></Route>
                </Switch>
              </Admin>
            )
          }}></Route>

        </Switch>
      </HashRouter>
    </div>
  )
}
export default App;
