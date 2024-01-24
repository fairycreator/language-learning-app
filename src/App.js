import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";
import TeacherList from "./components/TeacherList/TeacherList";
import FavoritePage from "./components/FavoritePage/FavoritePage";
import AuthForm from "./components/AuthForm/AuthForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/teachers" component={TeacherList} />
            <Route path="/login" component={AuthForm} />
            <Route path="/favorites" component={FavoritePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
