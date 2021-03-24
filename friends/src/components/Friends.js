import { useState, useEffect } from 'react'

export default function Friends() {
    const [friends, setFriends] = useState([])
    useEffect(() => {

    }, [])
    return (
        <h1>All your friends 🤩 (Should not be able to see this unless you're logged in!)</h1>
    )
}