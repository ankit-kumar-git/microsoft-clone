import "./App.css";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>

      <Banner />
      <Section1 />
      <Section2 />
      <Banner2 />
      <Section3 />
      <Section4 />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
