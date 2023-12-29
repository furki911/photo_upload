import React from "react";
import AppLayout from "./Layout/AppLayout/AppLayout";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" exact element={<Inbox />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
