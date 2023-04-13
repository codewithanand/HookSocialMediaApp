import React, { useContext, useState } from 'react'
import './comments.scss'
import {AuthContext} from '../../context/authenticationContext'
import { makeRequest } from '../../axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import moment from "moment"

const Comments = ({postId}) => {
    const {currentUser} = useContext(AuthContext)
    const queryClient = useQueryClient()
    const [desc, setDesc] = useState("")

    const { isLoading, error, data } = useQuery(['comments'], () =>
        makeRequest.get("/comments?postId="+postId).then((res) => {
            return res.data;
        })
    )


    const mutation = useMutation(
        (newComment) =>{
            return makeRequest.post("/comments", newComment)
    }, 
    {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["comments"])
        },
    })

    const handleClick = async (e) => {
        e.preventDefault()
        mutation.mutate({desc, postId})
        setDesc("")
    }

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilepic} alt="" />
                <input type="text" placeholder='Write a comment here' onChange={e => setDesc(e.target.value)} value={desc} />
                <button onClick={handleClick}>Send</button>
            </div>
            {isLoading 
                ? "Loading" 
                : data.map(comment => {
                    return(
                        <div className="comment" key={comment.id}>
                            <img src={comment.profilepic} alt="" />
                            <div className="info">
                                <span>{comment.name}</span>
                                <p>{comment.desc}</p>
                            </div>
                            <span className='date'>{moment(comment.createdat).fromNow()}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Comments