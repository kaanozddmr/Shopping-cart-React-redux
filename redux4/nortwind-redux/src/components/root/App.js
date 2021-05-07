
import {Container} from "reactstrap"
import Dasboard from "./Dasboard"
import Navi from "../navi/Navi";
import {Route,Switch} from "react-router-dom";
import CartDetail from "../card/CartDetail";

function App() {
  return (
    <Container >

      <Navi/>
    <Switch>
      <Route path="/" exact component={Dasboard}></Route>
      <Route path="/product" exact component={Dasboard}></Route>
      <Route path="/cart" exact component={CartDetail}></Route>
    </Switch>
    
    </Container>
  );
}

export default App;
