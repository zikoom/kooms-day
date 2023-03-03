/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Layout from './components/layout/Layout';

import { useDispatch } from 'react-redux';
import loadOauthSecret from './js/oauth';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    loadOauthSecret(dispatch)
  })



  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
