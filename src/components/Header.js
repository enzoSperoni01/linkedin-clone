import React from 'react';
import HeaderOption from './HeaderOption.js';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase.js';
import { logout, selectUser } from '../features/userSlice.js';

export default function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    } 

    return (
        <div className='header'>
            <div className='header__left'>
                <img 
                    src='https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg' alt="" 
                />

                <div className='header__search'>
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Chat} title="Messaging"/>
                <HeaderOption Icon={Notifications} title="Notifications"/>
                <HeaderOption 
                    avatar={user.email[0]}
                    title="Me" 
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}