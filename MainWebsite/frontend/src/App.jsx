import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Aboutus from "./pages/Aboutus/Aboutus.page";
import Contactus from "./pages/Contactus/Contactus.page";
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction.component";
import Services from "./pages/Services/Services.page";
import Error from "./components/Error/Error";
import WebDevelopment from "./pages/WebApplication/WebApplication.page";
import MobileDevelopment from "./pages/MobileDevelopment/MobileDevelopment.page";
import WindowsApplication from "./pages/WindowsApplication/WindowsApplication.page";
import AI from "./pages/AI/AI.pages";
import Projects from  './pages/Projects/Projects.page'
import Doctor from './components/ProjectDetails/ProjectDetails.components'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar name={document.getElementById("tarek")} />

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={Aboutus} />
            <Route exact path="/contact-us" component={Contactus} />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/web-development" component={WebDevelopment} />
            <Route exact path="/doctor" component={Doctor} />
            <Route
              exact
              path="/mobile-development"
              component={MobileDevelopment}
            />
            <Route
              exact
              path="/windows-application"
              component={WindowsApplication}
            />
            <Route exact path="/ai" component={AI} />
            <Route
              exact
              path="/under-construction"
              component={UnderConstruction}
            />

            {/* under construction page routing */}
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/gallery" component={UnderConstruction} />
            <Route exact path="/android" component={UnderConstruction} />

            <Route exact path="/blockchain" component={UnderConstruction} />

            {/* Consulancy Routes */}

            <Route
              exact
              path="/consultancy/:type"
              component={UnderConstruction}
            />

            {/* <Route exact strict path="/home/#tarek" component={Home} /> */}
            <Route exact path="/blog" component={UnderConstruction} />

            {/* Page Not Found Here */}
            <Route component={Error} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
