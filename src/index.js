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
import Mine from "./jaduguaza/Mine";
import Clone2 from "./jaduguaza/Clone2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="webgl" element={<WebGL />} />
        <Route path="blog" element={<div>블로그를,, 해볼까?</div>} />
        <Route path="guest-book" element={<div>나왔다감!!</div>} />
        <Route path="zaduguaza">
          <Route path="main" element={<Mine />} />
          <Route path="clone2" element={<Clone2 />} />

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // 뭔지 몰라서 일단 주석
