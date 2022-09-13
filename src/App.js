

import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import LeftNavBar from './components/LeftNavBar';

import './App.css'



function App() {
  return (
    <div className="App">
      <h1>koom is here</h1>
      <Header />
      <LeftNavBar />
      <Outlet />
    </div>
  );
}

export default App;
