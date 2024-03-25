import { authKey } from './authKey'

const host = 'http://localhost:3000'

const apiClient = (
  {
    path,
    method,
    request,
    requestAuth,
    extendOption,
  } : {
    path: string,
    method: string,
    request: { [key: string]: string },
    requestAuth: boolean,
    extendOption?: boolean,
  },
) => {
  const auth = authKey()

  // GETの場合はbodyを付けない
  if (method === 'GET') {
    return fetch(`${host}/${path}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'access-token': requestAuth ? auth['accessToken'] : '',
        'client': requestAuth ? auth['client'] : '',
        'uid': requestAuth ? auth['uid'] : '',
      },
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(new Error('Failed'))
      }
    })
  } else if( extendOption) {
    return fetch(`${host}/${path}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'access-token': requestAuth ? auth['accessToken'] : '',
        'client': requestAuth ? auth['client'] : '',
        'uid': requestAuth ? auth['uid'] : '',
      },
      body: JSON.stringify({ 
        ...request
      }),
    }).then(response => {
      if (response.ok) {
        return response
      } else {
        return Promise.reject(new Error('Failed'))
      }
    })
  } else {
    return fetch(`${host}/${path}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'access-token': requestAuth ? auth['accessToken'] : '',
        'client': requestAuth ? auth['client'] : '',
        'uid': requestAuth ? auth['uid'] : '',
      },
      body: JSON.stringify({ 
        ...request
      }),
    }).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(new Error('Failed'))
      }
    }) 
  }

}

export default apiClient