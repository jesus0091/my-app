import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Profile from './views/Profile/Profile'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Pay from './components/Pay/Pay';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/detail/:id' component={ItemDetailContainer} />
                        <Route path='/category/:id' component={CategoryListContainer} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/pay" component={Pay} />
                    </Switch>
                    <NavBar/>
                </div>
            </Router>
        </CartProvider>
    );
}
export default App;