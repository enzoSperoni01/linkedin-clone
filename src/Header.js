import React from 'react';
import HeaderOption from './HeaderOption.js';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';

export default function Header() {
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
                <HeaderOption avatar="./assets/testigo.png" title="Me" name="Enzo" />
            </div>
        </div>
    )
}