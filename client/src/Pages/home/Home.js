import React from 'react'
import Posts from '../../Components/posts/Posts'
import Share from '../../Components/share/Share'
import Stories from '../../Components/stories/Stories'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home