import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Profile from './views/Profile/Profile'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';

function App() {
  return (
    <Router>
        <div className="App">
        <Header />
        <Banner greeting='Hola!'/>
        <Category />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/detail/:id' component={ItemDetailContainer} />
            <Route path='/category/:id' component={CategoryListContainer} />
          </Switch>
        <NavBar />
      </div>
    </Router>
  );
}
export default App;