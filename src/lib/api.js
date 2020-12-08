import axios from 'axios'


const baseURL = 'https://www.omdbapi.com/?i='
const apiKeyURL = '&apikey='
// let IMDBid = "tt3896198"



// //*Proposed update (not working, id not recognised as parameter)
export const getMovie = id => {
  return axios.get(baseURL + id + apiKeyURL + process.env.REACT_APP_MY_API_KEY)
}


// //*HTTP GET single movie
// export const getMovie = () => {
//   return axios.get(url)
// }

// const url = `${baseURL}${IMDBid}${apiKeyURL}${process.env.REACT_APP_MY_API_KEY}`







