import { Switch, Route, Link } from 'react-router-dom'

export default function Home(){
    return (
        <>
         <h1>Welcome Home 🤠</h1>
         <Link to='/login'>Login to see your friends!</Link>
        </>
    )
}