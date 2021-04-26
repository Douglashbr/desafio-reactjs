import SearchInput from '../SearchInput'
import SearchButton from '../SearchButton'
import { useHistory } from 'react-router-dom'
import { compare, countStars } from '../../utils/functions'
import axios from 'axios'
import './style.css'
import { useEffect, useState } from 'react'

const SearchForm = () => {
  const history = useHistory();
  let [error, setError] = useState();

  useEffect(() => {
    if (error) {
      history.push('/');
    }
  })

  const getUserAndRepos = async () => {

    const userName = document.querySelector('#search').value

    try {
      const user = await axios.get(`https://api.github.com/users/${userName}`)
      const repos = await axios.get(`https://api.github.com/users/${userName}/repos`)
      const stars = countStars(repos.data)

      repos.data.sort(compare)

      return {
        user: user.data,
        repos: repos.data,
        stars
      }
    } catch (error) {
      setError('Usuário inválido! Por favor digite novamente.')
    }
  }

  const redirect = (path, state) => {
    history.push(path, state)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const state = await getUserAndRepos()
    redirect('/profile', state)
  }

  return (
    <form onSubmit={onSubmit} className="search">
      <h1 className='search__title'>Search Devs</h1>
      <SearchInput/>
      <SearchButton/>
      {error && <span className='alert-error'>{error}</span>}
    </form>
  )
}

export default SearchForm