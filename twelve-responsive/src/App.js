import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
