import React from "react";
import 'assets/scss/style.scss' 
import { BrowserRouter as Router,Routes,Route,withRouter,Switch} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";





function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/properties/:id" component={withRouter(DetailsPage)}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
      </Router>
      <ToastContainer>
        
      </ToastContainer>
    </div>
  );
}

export default App;
