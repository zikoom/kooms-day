

import { Outlet } from 'react-router-dom';
import Header from './components/Header'



function App() {
  return (
    <div className="App">
      <h1>koom is here</h1>
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default App;
