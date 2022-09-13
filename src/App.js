

import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">
      <h1>koom is here</h1>
      <Header></Header>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default App;
