import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <Routes>
          <Route path='/' element = {<App />} />
          <Route path = '/admin' element = {<AdminLogin />} />
      </Routes>
  </Router>
);
