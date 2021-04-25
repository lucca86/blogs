import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';

import '../styles/home.css';

const HomePage = () => {

    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();

    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));

    };


    return (
        <div className='home__page' style={{ display: isSignedIn ? 'none' : ''}}>
            {!isSignedIn 
                ? (
                <div className='login__message'>
                    <h2>📗</h2>
                    <h1>A readers favorite place!</h1>
                    <p>
                        We provide high quality online resourse for reading blogs.
                        Just sign in and start reading some quality blogs.
                    </p>
                    <GoogleLogin 
                        clientId='807508800381-lmmqhbejl7kivamk1sjjrtgcsdfhp2nf.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className='login__button'
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>
                ) : ("")}
                        
        </div>
    );
};

export default HomePage;
