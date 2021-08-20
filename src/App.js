import './scss/App.scss';

import Home from './views/Home/Home'
import Profile from './views/Profile/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Category from './components/Category/Category';
// import Banner from './components/Banner/Banner';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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



        {/* <Header />
        <Banner 
          greeting='Hola!'
        />
        <Category />
        <ItemListContainer />
        <NavBar/> */}
    </div>
  );
}
export default App;
