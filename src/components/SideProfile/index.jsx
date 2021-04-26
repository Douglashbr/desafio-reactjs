import { useHistory } from 'react-router-dom'

import followersImg from '../../images/followers.png'
import starImg from '../../images/star.png'
import heartImg from '../../images/heart.png'
import mailImg from '../../images/mail.png'
import markdownImg from '../../images/markdown.png'
import orgImg from '../../images/org.png'
import twitterImg from '../../images/twitter.png'
import websiteImg from '../../images/website.png'
import './style.css'

const SideProfile = ({
  avatar_url,
  name,
  login,
  bio,
  followers,
  following,
  company,
  location,
  email,
  blog,
  twitter_username,
  stars
}) => {
  let history = useHistory()

  const backToHome = () => {
    history.push('/')
  }

  return (
    <div className='side-profile'>
      <img className='side-profile__image' src={avatar_url} alt='Avatar Url'/>
      
      <h1 className='side-profile__name'>{name}</h1>
      <h3 className='side-profile__login'>@{login}</h3>

      <p className='side-profile__bio'>{bio}</p>

      <div className='side-profile__stats-container'>
        <div className='side-profile__stats'>
          <img className='side-profile__small-icon' src={followersImg} alt="Followers"/>
          <span>{followers} followers</span>
        </div>
        <div className='side-profile__stats'>
          <img className='side-profile__small-icon' src={heartImg} alt="Followers"/>
          <span>{following} following</span>
        </div>
        <div className='side-profile__stats'>
          <img className='side-profile__small-icon' src={starImg} alt="Followers"/>
          <span>{stars} stars</span>
        </div>
      </div>

      <ul className='side-profile__list'>
        {company && 
          <li className='side-profile__item'>
            <a title={company}>
              <img className='side-profile__large-icon' src={orgImg} alt='Org Icon'/>
              {company}
            </a>
          </li>
        }
        {location && 
          <li className='side-profile__item'>
            <img className='side-profile__large-icon' src={markdownImg} alt='Icon'/>
            {location}
          </li>
        }
        {email && 
          <li className='side-profile__item'>
            <a href={`mailto:${email}`} target='_blank' rel='noreferrer' title={email}>
              <img className='side-profile__large-icon' src={mailImg} alt='Icon'/>
              {email}
            </a>
          </li>
        }
        {blog && 
          <li className='side-profile__item'>
            <a href={blog} target='_blank' rel='noreferrer' title='website'>
              <img className='side-profile__large-icon' src={websiteImg} alt='Icon'/>
              {blog}
            </a>
          </li>
        }
        {twitter_username && 
          <li className='side-profile__item'>
            <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer' title={twitter_username}>
              <img className='side-profile__large-icon' src={twitterImg} alt='Icon'/>
              {twitter_username}
            </a>
          </li>
        }
      </ul>

      <button className='side-profile__button' onClick={backToHome}>
        Voltar
      </button>
    </div>
  )
}

export default SideProfile