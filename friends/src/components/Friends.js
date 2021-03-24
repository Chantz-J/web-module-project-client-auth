import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Friends() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/friends`, 
        { headers:  
            { authorization: localStorage.getItem('token') 
        }})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(`There was an error retrieving friends: ${err}`)
        })
    }, [])
    return (
        <>
        <h1>All your friends 🤩</h1>
        {/* {
            friends.map(friend => {
                return (
                    <div className="friend">Hello</div>
                )
            })
        } */}
        </>
    )
}