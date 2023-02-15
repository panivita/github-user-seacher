import React from "react";
import "./App.css";
import "./media.css";
import { Switch, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/about-page";
import { UserDetailsPage } from "./pages/user-details-page";
import { Header } from "./components/header";
import { Search } from "./components/search-section";
import { ResultSearch } from "./components/result-search-section";
import { SearchUserProvider } from "./Search-user-context";

const App = () => {
  return (
    <>
      <nav className="navbar-container">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <SearchUserProvider>
            <Header />
            <Search />
            <ResultSearch />
          </SearchUserProvider>
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/users/:username">
          <UserDetailsPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
