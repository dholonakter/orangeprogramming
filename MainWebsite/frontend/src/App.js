import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="*">
            {/* Page Not Found Here */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
