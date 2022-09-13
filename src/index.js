import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home'
import WebGL from "./components/WebGL";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="webgl" element={<WebGL />} />
        <Route path="guest-book" element={<div>나왔다감!!</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // 뭔지 몰라서 일단 주석
