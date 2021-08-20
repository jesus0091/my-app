import './scss/App.scss';

import Home from './views/Home/Home'
import Profile from './views/Profile/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </Router>
        <NavBar />
    </div>
  );
}
export default App;
