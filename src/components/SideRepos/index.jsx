import { calcDiffDays } from '../../utils/functions'

import './style.css'
import darkstar from '../../images/dark-star.png'

const SideRepos = ({ repos }) => {
  return (
    <div className='side-repos__container'>
      {repos.map((item) => {
        return (
          <div key={item.id} className='side-repos__card'>
            <h2 className='side-repos__title'><a href={item.html_url} target='_blank' rel='noreferrer' title={item.name}>{item.name}</a></h2>
            <p className='side-repos__description'>{item.description}</p>
            <div className='side-repos_footer'>
              <img className='side-repos__image' src={darkstar} alt='Dark Star Icon'/>
              <span>{item.stargazers_count} stars</span>
              <span className='side-repos__divider'></span>
              <span>Updated {calcDiffDays(item.updated_at)} days ago</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SideRepos