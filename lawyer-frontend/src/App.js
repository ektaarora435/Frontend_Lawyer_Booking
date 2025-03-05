import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import LawyerList from "./pages/LawyerList";
import LawyerDetail from "./pages/LawyerDetail";
import RatingForm from "./pages/RatingForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/lawyers" element={<LawyerList />} />
          <Route path="/lawyers/:id" element={<LawyerDetail />} />
          <Route path="/rating" element={<RatingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
