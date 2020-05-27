// Spotify Client ID, redirect URI and access token variables
const clientId = '68d7380b8b43402a9a9350e0e31a9f92'

const redirectUri = 'http://localhost:3000/'
// Variale to hold access token retrevied from Spotify
let accessToken;

// Spotify Object
const Spotify = {
    // Get access Token method via implict grant
    getAccessToken() {
        // return access token if ones assigned to the variable
        if(accessToken) {
            console.log(accessToken)
            return accessToken
        }

        // Locate Access Token and Expirey time 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        
        // Return new access token 
        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])

            // Clears parameters to allow new tokens when one expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            
            return accessToken
        }
        // Spotify Access URL
        else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}
            &response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessURL 
        }
    }, 
    // Fetch tracks
    getTracks(trackName) {
        const accessToken = Spotify.getAccessToken()
       
    }
}

// Export Spotfiy object to use in componets
export default Spotify