

// in public folder
const secretJsonPath = '/oauth/googld_oauth_client_secret.json'

export default async function getOauthSecret () {

  try{
    const parsedJson = await (await fetch(secretJsonPath, {headers: {Accept: 'application/json'}})).json()
    return parsedJson.web;
  }catch(e){
    console.log('call oauth secret json error: ', e);
    return false;
  }
}