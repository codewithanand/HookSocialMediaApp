import React, { useContext } from 'react'
import './profile.scss'

import Posts from "../../Components/posts/Posts"
import { AuthContext } from '../../context/authenticationContext';
import { useLocation } from 'react-router-dom';

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  const userId = useLocation().pathname.split("/")[2]

  const { isLoading, error, data } = useQuery(['users'], () =>
    makeRequest.get("/users/find/"+userId).then((res) => {
        return res.data;
    })
  )

  const handleFollow = () => {

  }

  return (
    <div className='profile'>
      <div className="images">
        <img src={isLoading ? "" : data.coverpic} alt="" className='coverPic' />
        <img src={isLoading ? "" : data.profilepic} alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          {/* <div className="left">
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
          </div> */}
          <div className="center">
            <span>{isLoading ? "" : data.name} </span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{isLoading ? "" : data.city} </span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{isLoading ? "" : data.website} </span>
              </div>
            </div>
            {isLoading 
              ? <button>Loading...</button> 
              : data.id === currentUser.id 
              ? <button>Update</button> 
              : <button onClick={handleFollow}>Follow</button>
            }
          </div>
          {/* <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div> */}
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile