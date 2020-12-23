import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalStorage } from "./Components/dB/useLocalStorage";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import RouteError from "./Components/Modules/routeError";
import TechList from "./Components/TechList";

function App() {
  const [userData, setUserData] = useLocalStorage("user", '');

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact> <Landing userData={userData} /> </Route>
          <Route path="/login"><Login setUserData={setUserData} /> </Route>
          {!userData ? null : 
          <Route path="/techlist" component={TechList} />}
          <Route component={RouteError} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
