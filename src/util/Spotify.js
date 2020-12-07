let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    //check for access token match. This info is displayed in the hint (task 79)
    const accessTokenMacth = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMacth && expiresInMatch) {
      accessToken = accessTokenMacth[1];
      const expiresIn = Number(expiresInMatch[1]);
      // this clears the parameters, allowing us to grab a new access token when it expires. 
      //Some details are displayed on task 80 hint
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }

  }
}











export default Spotify;