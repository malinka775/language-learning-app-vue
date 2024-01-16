import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20240111T173803Z.8680d5bf3d519f2b.e06c7e61c0fb29e5c44d52e3cf07589c91e43799&lang=en-ru&text=time',
  headers: {
    'Content-Type': 'application/json'
  }
}

const axiosInstance = axios.create(axiosConfig);

async function test() {
  try {
    const resp = await axiosInstance.get();
    console.log('resp is', resp)
  } catch(e) {
    console.log('error occured', e)
  }
}

// async function registerUser(userData) {
//   try {
//     const response = await axiosInstance.post('/registration', userData)
//     console.log('response is', response)
//   } catch (e) {
//     if (e.response) {
//       console.log(e.response)
//     } else {
//       console.log(e.message || 'Something went wrong. Please try again later')
//     }
//     throw new Error(e.message)
//   }
// }

// async function authUser(userData) {
//   try {
//     const response = await axiosInstance.post('/login', userData)
//     console.log('response is', response)
//   } catch (e) {
//     if (e.response) {
//       console.log(e.response)
//     } else {
//       console.log(e.message || 'Something went wrong. Please try again later')
//     }
//     throw new Error(e.message)
//   }
// }

export { test }
