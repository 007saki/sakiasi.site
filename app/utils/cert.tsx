



import axios from "axios"

const data = await axios.get('/api/certificate')
export const cert = await data.data