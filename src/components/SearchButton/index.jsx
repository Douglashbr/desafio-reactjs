import './style.css'
import lupa from '../../images/lupa.png'

const SearchButton = () => {
  return (
    <button className='search__button'>
      <img className='search__image' src={lupa} alt='Lupa'/>
      Buscar
    </button>
  )
}

export default SearchButton