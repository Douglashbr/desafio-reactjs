import './index.css'
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'

import Profile from './pages/Profile'
import Home from './pages/Home'

const App = () =>  {
  return (
    <Router>
      <Switch>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;