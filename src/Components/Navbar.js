import React, { useState } from 'react';
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogout } from 'react-google-login';

import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../features/userSlice';

import '../styles/navbar.css';

const Navbar = () => {

    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };

    return (
        <div className='navbar'>
            <h1 className='navbar__header'>Blogmanía </h1>
            {isSignedIn && ( 
                <div className='blog__search'>
                    <input
                        className='search'
                        placeholder='Search for a blog'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button
                        className='submit'
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </div>)}

                {isSignedIn ? 
                    (<div className='navbar__user__data'>
                        <Avatar 
                            className='user'
                            src={userData?.imageUrl}
                            alt={userData?.name}  
                        />
                        <h1 className='signedIn'>{userData?.givenName}</h1>
                        <GoogleLogout 
                            clientId='807508800381-lmmqhbejl7kivamk1sjjrtgcsdfhp2nf.apps.googleusercontent.com' 
                            render={(renderProps) => (
                                <button 
                                    className='logout__button'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Logout
                                </button>
                            )}
                            onLogoutSuccess={logout}
                        />
                    </div>
                    ) : (
                        <h1 className='notSignedIn'>User not available</h1>
                    )}
        </div>
    );
};

export default Navbar;
