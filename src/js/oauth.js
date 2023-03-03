
import { SET_OAUTH_MANAGER } from "../action/oauth_actions";

const secretJsonPath = '/oauth/googld_oauth_client_secret.json'


/**
 *
 * @param {*} dispatch
 * @description oatuh json 로딩후 redux에 값 세팅
 */
export default async function loadOauthSecret (dispatch) {
  if(!dispatch) throw new Error('no dispatch');

  try{
   const parsedJson = await (await fetch(secretJsonPath, {headers: {Accept: 'application/json'}})).json()
   const {auth_uri, client_id, client_secret} = parsedJson.web;

   dispatch(SET_OAUTH_MANAGER({
    auth_uri,
    client_id,
    client_secret
  }))

  }catch(e){
   console.log('call oauth secret json error: ', e);
  }

}