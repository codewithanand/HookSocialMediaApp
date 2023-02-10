import React from 'react'
import './profile.scss'

import Posts from "../../Components/posts/Posts"

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/261821/pexels-photo-261821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='coverPic' />
        <img src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>INDIA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>anand_dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile