import { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

export default function Friends() {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth().get('/api/friends/')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.error(`There was an error retrieving friends: ${err}`)
        })
    }, [])
    return (
        <>
        <h1>All your friends 🤩</h1>
        {
            friends.map(friend => {
                return (
                    <div key={friend.id} className="friend" style={{padding: '2rem', border: '1px solid black'}}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })
        }
        </>
    )
}