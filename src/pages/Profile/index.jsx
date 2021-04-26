import { useLocation } from 'react-router-dom'
import SideProfile from '../../components/SideProfile';
import SideRepos from '../../components/SideRepos';

const Profile = () => {
  const { state } = useLocation();
  return (
    <div className='d-flex'>
      <SideProfile 
        avatar_url={state.user.avatar_url}
        name={state.user.name}
        login={state.user.login}
        bio={state.user.bio}
        followers={state.user.followers}
        following={state.user.following}
        company={state.user.company}
        location={state.user.location}
        email={state.user.email}
        blog={state.user.blog}
        twitter_username={state.user.twitter_username}
        stars={state.stars}
      />
      <SideRepos
        repos={state.repos}
      />
    </div>
  )
}
 export default Profile