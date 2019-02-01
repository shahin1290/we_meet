import axios from 'axios'

const storeUser = async () => {
  const signInUrl = "http://localhost:3000/auth/sign_in"
  let response = await axios.post(signInUrl, { email: "rand@random.com", password: "password" })
  sessionStorage.setItem('current_user', JSON.stringify({ id: response.data.data.id }))
  sessionStorage.setItem('credentials', JSON.stringify(response.headers))
}

const getUser = async () => {
  const user = await sessionStorage.getItem('credentials')
  return JSON.parse(user)
}

export default { storeUser, getUser }