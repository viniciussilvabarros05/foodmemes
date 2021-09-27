
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Menu } from "./pages/Menu"
import "./styles/Global.scss"


import { AuthContextProvider } from './contexts/AuthContext';

import { PrivateRouter } from './components/PrivateRoute';
import { Requests } from './pages/Requests';
import { Contacts } from './pages/Contacts';
import { Cart } from './pages/Cart';



 function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <AuthContextProvider>
          <Switch>

           
            <Route path="/" exact component={Home} />
            {/* <Route path="/pedidos"  component={Requests} /> */}
            <Route path="/contatos" component={Contacts} />
            {/* <Route path="/carrinho"  component={Cart} /> */}
            <PrivateRouter path="/Menu" >
              <Menu/>
            </PrivateRouter>

            <PrivateRouter path="/pedidos" >
              <Requests/>
            </PrivateRouter>

            <PrivateRouter path="/carrinho">
              <Cart/>
            </PrivateRouter>

            <Route path="*" exact component={Home}/>
          </Switch>
        </AuthContextProvider>

      </BrowserRouter>


    </div>
  );
}

export default App;
