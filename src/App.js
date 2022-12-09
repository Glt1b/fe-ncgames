import './App.css';
import { useState, useContext, Children } from "react";
import { Route, Routes, useParams} from "react-router-dom";

import Header from "./components/Header";
import ReviewList from "./components/ReviewList"
import ReviewPage from "./components/ReviewPage"
import ErrorPage from "./components/ErrorPage"


function App() {
  return (
    <div className="App">
      <Header />
  
      <Routes>
        <Route path="/" element={<ReviewList/>} />
        <Route path="/:category" element={<ReviewList/>} />
        <Route path="/reviewPage/:review_id" element={<ReviewPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
