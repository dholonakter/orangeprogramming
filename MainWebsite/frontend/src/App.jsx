import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Aboutus from "./pages/Aboutus/Aboutus.page";
import Contactus from "./pages/Contactus/Contactus.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/" component={Home} />
          {/* Page Not Found Here */}
          <Route exact path="*" component={" "} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
