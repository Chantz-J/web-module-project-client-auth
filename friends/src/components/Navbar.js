import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    height: 70px;
    width:100%
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li {
            list-style: none;
            
            a {
                text-decoration: none;
            }
        }
    }
`

export default function Navbar() {
    const logout = () => {

    }
    return (
        <Nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/logout' onClick={logout}>Logout</Link></li>
                <li><Link to='/friends'>Friends Page</Link></li>
            </ul>
        </Nav>
    )
}