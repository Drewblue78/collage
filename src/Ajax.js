import Axios from "axios"
const SERVER = "/"
const ajax = Axios.create({ baseURL: SERVER })

async function $get(url, dataToSend) {
  let res = await ajax.get(url, { params: dataToSend })
  return res.data
}
async function $post(url, dataToSend) {
  let res = await ajax.post(url, dataToSend)
  return res.data
}




export default {
  $get, $post
}
