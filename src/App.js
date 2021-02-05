import BioPage from "./pages/BioPage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import { Switch, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import TopScroll from "./components/TopScroll"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <TopScroll />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch Location={location} key={location.pathname}>
        <Route path="/" exact>
          <BioPage />
        </Route>
        <Route path="/products" >
          <MyWork />
        </Route>
        <Route path="/contact" >
          <Contact />
        </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
