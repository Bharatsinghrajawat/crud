import {BrowserRouter , Switch , Route} from 'react-router-dom'
import About from "./components/About";
import AddUser from './components/AddUser';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div className="container">        
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/user/add' component={AddUser} />
                <Route exact path='/user/edit/:id' component={EditUser} />
                <Route exact path='/user/:id' component={ViewUser} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
