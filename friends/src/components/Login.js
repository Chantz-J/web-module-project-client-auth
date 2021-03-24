import { useState } from 'react'
import axios from 'axios'


export default function Login(props) {
    const formState = {
            username: '',
            password: ''
    }
    const [form, setForm] = useState(formState)
    const handleChange = e => {
        setForm({
            ...form,
                [e.target.name]: e.target.value
        })
    }
    const login = e => {
        e.preventDefault()
        //Make post request to database using user input, recieve token, and save to local storage
        axios 
        .post(`http://localhost:5000/api/login`, form)
        .then(res => {
            console.log(`CJ, Login.js, Login:`, res.data.payload)
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            props.history.push('/friends')
        })
        .catch(err => {
            console.error(`cannot login to server: ${err.message}`)
        })
    }
    return (
        <main className="Login-Main">
            <form onSubmit={login}>
                <input 
                 type="text" 
                 name="username" 
                 value={form.username}
                 onChange={handleChange}/>
                 <input 
                 type="password" 
                 name="password" 
                 value={form.password}
                 onChange={handleChange}/>
                 <button>Login In!</button>
            </form>
        </main>
    )
}