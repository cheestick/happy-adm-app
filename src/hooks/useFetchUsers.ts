import { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/urls'

type TUser = {
  gender: "female" | "male",
  name: {
    title: string,
    first: string,
    last: string
  },
  login: {
    uuid: string,
    username: string,
    password: string,
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
}

type TFetchUser = {
  results: TUser[],
  info: {
    seed: string,
    results: number,
    page: number,
    version: string
  }
}


export const useFetchUsers = () => {
  const [users, setUsers] = useState<TUser[]>([])

  useEffect(() => {
    const abortController = new AbortController()
    
    async function fetchUsers(): Promise<TUser[]> {
      const response = await fetch(BASE_URL, {signal: abortController.signal})
      const {results} = await response.json() as TFetchUser
      
      return results
    }
    
    fetchUsers().then(u => setUsers(u)).catch(e => console.log(e))

    return () => { abortController.abort() }
    }, [])

  return users
}