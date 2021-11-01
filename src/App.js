import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <Featured />
      <Categories />
    </div>
  );
}

export default App;
