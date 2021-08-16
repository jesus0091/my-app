import './scss/App.scss';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
        <Header />
        <ItemListContainer 
          greeting='Hola!'
        />
        <Category />
        <NavBar/>
    </div>
  );
}
export default App;
