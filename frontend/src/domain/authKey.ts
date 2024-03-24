export function authKey() : {
  accessToken: string,
  client: string,
  uid: string,
} {
  return {
    accessToken: localStorage.getItem('access-token') ?? '',
    client: localStorage.getItem('client') ?? '',
    uid: localStorage.getItem('uid')?? '',
  }
} 
