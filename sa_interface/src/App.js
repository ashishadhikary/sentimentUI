import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route  exact path="/about" component={About} />
     {/* <Home/> */}
     {/* <About/> */}
    </div>
    </Router>
  );
}

export default App;
