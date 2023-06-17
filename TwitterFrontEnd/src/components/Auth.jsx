import { Link } from 'react-router-dom'

export const Auth = () => {
    return (
        <ul>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Lógin</Link>
            </li>
        </ul>
    )
}
