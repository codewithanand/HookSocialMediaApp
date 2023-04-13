import {db} from '../connect.js'
import jwt from "jsonwebtoken"
import moment from "moment"

export const getComments = (req, res) => {

    const query = `SELECT c.*, u.id AS userId, name, profilepic FROM comments AS c JOIN users AS u ON (u.id = c.userid) WHERE c.postid = ? ORDER BY c.createdat DESC`

    db.query(query, [req.query.postId], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data)
    })

}

export const addComment = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token, "secretKey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")

        const query = "INSERT INTO comments (`desc`, `userid`, `createdat`, `postid`) VALUES (?)"
        const values = [
            req.body.desc,
            userInfo.id,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            req.body.postId
        ]
    
        db.query(query, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Comment has been created!")
        })
    })

}