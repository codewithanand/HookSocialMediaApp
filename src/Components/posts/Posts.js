import React from 'react'
import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
    // Temporary Data
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            name: "John Doe",
            userId: 1,
            profilePic: "https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg",
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]

    const postItem = posts.map(post => {
        return(
            <Post post={post} key={post.id} />
        )
    })

    return (
        <div className='posts'>
            {postItem}
        </div>
    )
}

export default Posts