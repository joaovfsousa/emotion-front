import axios from 'axios'

export default axios.create( {
  baseURL: 'https://en61m3dah5.execute-api.us-east-1.amazonaws.com'
} )