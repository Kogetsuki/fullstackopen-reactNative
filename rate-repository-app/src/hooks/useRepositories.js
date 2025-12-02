import { useState, useEffect } from 'react'


const useRepositories = () => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)


  const fetchRepositories = async () => {
    setLoading(true)

    const response = await fetch('https://paronymous-atmospheric-zenia.ngrok-free.dev/api/repositories')
    const json = await response.json()

    setLoading(false)
    setRepositories(json)
  }


  useEffect(() => {
    fetchRepositories()
  }, [])


  return {
    repositories,
    loading,
    refetch: fetchRepositories
  }
}


export default useRepositories