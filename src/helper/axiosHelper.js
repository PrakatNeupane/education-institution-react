import axios from 'axios'

const url = 'http://universities.hipolabs.com/search?country=Australia'
export const fetchDataFromApi = () => {
    axios.get(url).then((response) => console.log(response.data)).catch(error => console.error(`Error: ${error}`))
}