import React from 'react'
import Posts from '../../Components/posts/Posts'
import Stories from '../../Components/stories/Stories'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home