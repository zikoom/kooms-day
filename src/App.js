/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import Layout from './components/layout/Layout';

import { useDispatch } from 'react-redux';
import { SET_OAUTH_MANAGER } from './action/oauth_actions';
import getOauthSecret from './js/oauth';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    ( async () => {
      const result = await getOauthSecret();

      const {auth_uri, client_id, client_secret} = result;
      dispatch(SET_OAUTH_MANAGER({
        auth_uri,
        client_id,
        client_secret
      }))
    })()
  }, [])



  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
