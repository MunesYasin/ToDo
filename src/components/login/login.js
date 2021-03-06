import React, { useState, useContext } from 'react';
import { authContext } from '../../context/auth';
import { When } from 'react-if';
import './form.scss';
import { Link } from 'react-router-dom'
export default function LogIn() {
    const auth = useContext(authContext);
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        auth.lofInFunction(user.username, user.password);
    }
    return (
        <>
            <When condition={!auth.isLoggedIn}>
                <form id='newForm' onSubmit={handleSubmit}>
                    <h2>Log In Form</h2>
                    <label class="bp3-label">
                        <span>username</span>
                        <input class="bp3-input" type="text" name="username" placeholder="username" onChange={handleChange} />
                    </label>
                    <label class="bp3-label">
                        <span>password</span>
                        <input class="bp3-input" type="password" name="password" placeholder="password" onChange={handleChange} />
                    </label>
                    <label>
                        <button class="bp3-button" type="submit">login</button>
                    </label>
                    <label>
                        <Link to='/todo-app/signup'>
                            <button class="bp3-button" type="submit">signup</button>
                        </Link>
                    </label>
                </form>
            </When>
        </>
    )
}