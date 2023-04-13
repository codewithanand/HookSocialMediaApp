import jwt from 'jsonwebtoken';
import moment from 'moment/moment.js';
import {db} from '../connect.js'


export const getPosts = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token, "secretKey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")

        const query = `SELECT p.*, u.id AS userId, name, profilepic FROM posts AS p JOIN users AS u ON (u.id = p.userid) LEFT JOIN relationships AS r ON (p.userid = r.followeduserid) WHERE r.followeruserid = ? OR p.userid = ? ORDER BY p.createdat DESC`
    
        db.query(query, [userInfo.id, userInfo.id], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json(data)
        })
    })

}

export const addPost = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in!")

    jwt.verify(token, "secretKey", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!")

        const query = "INSERT INTO posts (`desc`, `img`, `createdat`, `userid`) VALUES (?)"
        const values = [
            req.body.desc,
            req.body.img,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
        ]
    
        db.query(query, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post has been created!")
        })
    })

}