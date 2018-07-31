import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/main";
import reducers from "./reducers";
import Header from "./components/header";
import JobContent from "./components/jobpage";
import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";
import HomeContent from "./components/home";
import SchoolContent from "./components/schoolpage";
import MeContent from "./components/mepage";
import Talk from "./components/talk";
import Email from "./components/contactpage";
import Question from "./components/question";

const createStoreWithMiddleware = applyMiddleware()(createStore);

<Main />;

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Main>
          <Route path='/home' component={HomeContent} />
          <Route path='/jobpage' component={JobContent} />
          <Route path='/schoolpage' component={SchoolContent} />
          <Route path='/mepage' component={MeContent} />
          <Route path='/contactpage' component={Email}/>
          <Route path='/talk' component={Talk} />
          <Route path="/question" component={Question}/>
          </Main>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
