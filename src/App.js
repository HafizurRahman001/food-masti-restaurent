import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Restaurent from './components/Restaurent/Restaurent';
import Header from './components/Header/Header';
import NotFound from './components/Restaurent/NotFound';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/restaurent">
            <Restaurent></Restaurent>
          </Route>
          <Route exact path="/restaurent/:id">
            <Details></Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
