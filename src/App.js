import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import TeacherList from "./components/TeacherList";
import FavoritePage from "./components/FavoritePage";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={AuthForm} />
        <Route path="/teachers" component={TeacherList} />
        <Route path="/favorites" component={FavoritePage} />
      </Switch>
    </Router>
  );
}

export default App;
