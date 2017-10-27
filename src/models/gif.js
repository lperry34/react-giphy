import axios from 'axios'

class Gif {
  static all(query){
    let request = axios.get("http://api.giphy.com/v1/gifs/search?q="+query+"&api_key=7OdbEXP6RV0d6Lw1O1XChPgMMSPqVKfN&limit=50")
    return request
  }

}

export default Gif
