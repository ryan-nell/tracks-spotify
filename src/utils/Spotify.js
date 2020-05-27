// Spotify Client ID, redirect URI and access token variables
const clientId = ''

const redirectUri = ''
// Variale to hold access token retrevied from Spotify
let accessToken;

// Spotify Object
const Spotify = {
    // Get access Token method via implict grant
    getAccessToken() {
        // return access token if ones assigned to the variable
        if(accessToken) {
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
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`
            window.location = accessURL 
        }
    }, 
    // Fetch tracks
    getTracks(trackName) {
        const accessToken = Spotify.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${trackName}&limit=9`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(jsonResponse => {
            if(!jsonResponse) {
                return []
            }
            else {
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    image: track.album.images[0].url,
                    uri: track.uri,
                    previewTrack: track.preview_url
                }))
            }
        })
    }
}

// Export Spotfiy object to use in componets
export default Spotify