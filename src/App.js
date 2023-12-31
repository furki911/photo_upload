import React, { useState } from "react";
import AppLayout from "./Layout/AppLayout/AppLayout";
import Home from "./Pages/Home";
import Inbox from "./Pages/Inbox";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DraggableModal from "./Components/DraggableModal";

const App = () => {
  const [fileViewModal, setFileViewModal] = useState({ open: false });

  const openFileViewModal = (file) => {
    setFileViewModal({ open: true, file });
  };

  const closeModal = () => {
    setFileViewModal({ open: false });
  };

  return (
    <Router>
      <AppLayout>
        <DraggableModal data={fileViewModal} onClose={closeModal} />
        <Routes>
          <Route
            path="/"
            element={<Home openFileViewModal={openFileViewModal} />}
          />
          <Route path="/About" exact element={<Inbox />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
