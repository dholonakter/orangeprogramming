import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Aboutus from "./pages/Aboutus/Aboutus.page";
import Contactus from "./pages/Contactus/Contactus.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.component";
import WebServices from './pages/WebDevelopmentServices/WebDevelopment.page';
import Blog from "./pages/Blog/Blog.page";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={Aboutus} />
            <Route exact path="/contact-us" component={Contactus} />
            <Route exact path="/" component={Home} />
            <Route exact path="/web-development" component={WebServices} />
            <Route
              exact
              path="/under-construction"
              component={UnderConstruction}
            />



           {/* under construction page routing */}
            <Route exact path="/projects" component={UnderConstruction} />
            <Route exact path="/gallery" component={UnderConstruction} />
            <Route exact path="/android" component={UnderConstruction} />
            <Route exact path="/ai" component={UnderConstruction} />
            <Route exact path="/iOS" component={UnderConstruction} />
            <Route exact path="/blockchain" component={UnderConstruction} />
            <Route exact path="/cloud" component={UnderConstruction} />


            <Route exact strict path="/home/#tarek" component={Home} />
            <Route exact path="/blog" component={Blog} />


            {/* Page Not Found Here */}
            <Route exact path="*" component={" "} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
