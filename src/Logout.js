import {Link} from 'react-router-dom';
export default function Logout() {
    return (
        <div>
            <h1>you are logout</h1>
        <Link to="/login">Go to Login</Link>
        </div>
    )
}
