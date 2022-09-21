import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Context from "./context/Context";
import Landingpage from "./pages/Landingpage";
import Loginpage from "./pages/Loginpage";
import Postspage from "./pages/Postspage";
import Singlepage from "./pages/Singlepage";
import Writepage from "./pages/Writepage";

const App = () => {
  const { user } = useContext(Context);

  return (
    <Router>
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route path="/admin" element={user ? <Landingpage /> : <Loginpage />} />
        <Route path="/posts" element={<Postspage />} />
        <Route
          exact
          path="/write"
          element={user ? <Writepage /> : <Loginpage path="/admin" />}
        />
        <Route path={"/posts/:postId"} element={<Singlepage />} />
      </Routes>
    </Router>
  );
};

export default App;
