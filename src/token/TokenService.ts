// ! Token sollte eigentlich nicht in Cookie gespeichert werden
// TODO Austauschen durch Set Cookie von Backend
class TokenService {

    EXDAYS = 1
    COOKIE_NAME = "jwt-token"

    saveToken(token: string) {
        const d = new Date()
        d.setTime(d.getTime() + (this.EXDAYS * 24 * 60 * 60 * 1000))
        let expires = "expires=" + d.toUTCString()
        document.cookie = this.COOKIE_NAME + "=" + token + ";" + expires + ";path=/"
    }

    getToken() {
        let cookieString = this.COOKIE_NAME + "="
        
        let decodedCookie = decodeURIComponent(document.cookie)
        let ca = decodedCookie.split(";")

        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(cookieString) == 0) {
              return c.substring(cookieString.length, c.length);
            }
          }
          
          // Cookie not avaiable
          return null;
    }

    clearToken() {
      const d = new Date()
      d.setTime(0)
      let expires = "expires=" + d.toUTCString()
      document.cookie = this.COOKIE_NAME + "=" + "token" + ";" + expires + ";path=/"
    }

}

export const tokenService = new TokenService()
