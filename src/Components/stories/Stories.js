import React, { useContext } from 'react'
import { AuthContext } from '../../context/authenticationContext';
import './stories.scss'

const Stories = () => {
    const {currentUser} = useContext(AuthContext);

    // Temporary data
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "John Doe",
            img: "https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

    const storyItem = stories.map(story => {
        return(
            <div className="story" key={story.id}>
                <div className="overlay"></div>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        )
    })
    return (
        <div className='stories'>
            <div className="story">
                <div className="overlay"></div>
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {storyItem}
        </div>
    )
}

export default Stories