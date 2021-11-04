import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ViewMovie from "./pages/ViewMovie";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Catalog from "./pages/Catalog";
import Search from "./pages/Search";
import ScrollToTop from "./components/scrollToTop";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <ScrollToTop/>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
          </Route>
          <Route exact path="/catalog/:genreid">
            <Catalog />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/movie/:id">
            <ViewMovie />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
