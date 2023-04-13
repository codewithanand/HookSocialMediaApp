import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment'
import Comments from '../comments/Comments';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import { AuthContext } from '../../context/authenticationContext';


import './post.scss'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(['likes', post.id], () =>
        makeRequest.get("/likes?postId="+post.id).then((res) => {
            return res.data;
        })
    )

    const queryClient = useQueryClient()
    const mutation = useMutation(
        (liked) =>{
            if(liked) return makeRequest.delete("/likes?postId="+post.id)
            return makeRequest.post("/likes", {postId: post.id})
    }, 
    {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["likes"])
        },
    })

    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id))
    }

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilepic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>{moment(post.createdat).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/"+post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {
                            isLoading 
                            ? "loading"
                            : data.includes(currentUser.id) 
                            ? <FavoriteOutlinedIcon style={{color: "red"}} onClick={handleLike} /> 
                            : <FavoriteBorderOutlinedIcon onClick={handleLike} />
                        }
                        { !isLoading && data.length} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id} />}
            </div>
        </div>
    )
}

export default Post