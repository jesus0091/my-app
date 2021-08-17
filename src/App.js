import './scss/App.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './components/Category/Category';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner 
          greeting='Hola!'
        />
        <Category />
        <ItemListContainer />
        <NavBar/>
    </div>
  );
}
export default App;
