import React, { useContext } from 'react'
import './comments.scss'
import {AuthContext} from '../../context/authenticationContext'

const Comments = () => {
    const {currentUser} = useContext(AuthContext)

    // Temporary data
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            name: "John Doe",
            userId: 2,
            profilePic: "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit modi, dignissimos harum dicta labore atque reprehenderit illo aperiam repellendus commodi voluptate recusandae consequuntur fugit quos. Doloremque atque consequuntur tempore!",
            name: "John Doe",
            userId: 2,
            profilePic: "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg",
        },
    ]

    const commentItem = comments.map(comment => {
        return(
            <div className="comment" key={comment.id}>
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 min ago</span>
            </div>
        )
    })

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder='Write a comment here' />
                <button>Send</button>
            </div>
            {commentItem}
        </div>
    )
}

export default Comments