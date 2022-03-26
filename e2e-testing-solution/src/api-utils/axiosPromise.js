const axios = require('axios')

// A wrapper around Axios
const axiosPromise = async (
  method,
  url,
  payload,
  config,
) => {
  return new Promise((resolve, reject) => {
    if (method.includes('et')) {
      axios[method](
        url,
        config,
      ).then((response) => {
        resolve(response)
      }).catch((e) => {
        if (e.response) resolve(e.response)
        else reject(e)
      })
    } else {
      axios[method](
        url,
        payload,
        config,
      ).then((response) => {
        resolve(response)
      }).catch((e) => {
        if (e.response) resolve(e.response)
        else reject(e)
      })
    }
  })
}

module.exports = axiosPromise
