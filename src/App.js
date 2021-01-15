
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import ItemPage from './pages/ItemPage/ItemPage';
import NavbarComponent from './components/Navbar/NavbarComponent';

function App() {
  return (
    <div >
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/:id">
            <ItemPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
