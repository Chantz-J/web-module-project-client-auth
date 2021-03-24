import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'

import { GlobalStyles } from './styles/GlobalStyle'

export default function App(){
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/login' component={Login}/>
          <Route path ='/logout' component={Logout}/>
          <PrivateRoute path='/friends' component={Friends} />
      </Switch>
    </>
  )
}
