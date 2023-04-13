import jwt from 'jsonwebtoken'
import { db } from '../connect.js'

export const getLikes = (req, res) => {
    const query = "SELECT userid FROM likes WHERE postid = (?)"

    db.query(query, [req.query.postId], (err, data) => {
        if (err) return res.status(500).json("Something went wrong")
        return res.status(200).json(data.map((like) => like.userid))
    })
}

export const addLike = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token, "secretKey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")

        const query = "INSERT INTO likes (`userid`, `postid`) VALUES (?)"
        const values = [
            userInfo.id,
            req.body.postId
        ]
    
        db.query(query, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Comment has been liked!")
        })
    })
}

export const deleteLike = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token, "secretKey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")

        const query = "DELETE FROM likes WHERE `userid`=? AND `postid`=?"
    
        db.query(query, [userInfo.id, req.query.postId], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Comment has been disliked!")
        })
    })

}