import './Nav.css';
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/radio'>Radio</NavLink>
            <NavLink to='/checkbox'>Checkbox</NavLink>
            <NavLink to='/content'>Content</NavLink>
            <NavLink to='/course'>Course</NavLink>
        </div>

    );
}

export default Nav;