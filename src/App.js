
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiagnosisForm from "./components/DiagnosisForm";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiagnosisForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
