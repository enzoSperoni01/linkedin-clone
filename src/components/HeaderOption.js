import React from 'react';
import './HeaderOption.css';
import Avatar from '@mui/material/Avatar';

function HeaderOption({ avatar, Icon, title, name }) {
    return (
        <div className='headerOption'>
            { 
                Icon && <Icon className="headerOption__icon" />
            }
            {
                avatar && <Avatar className="headerOption__icon" src={avatar} alt={name}/>
            }
            <h3 className='headerOption__title'>
                { title }
            </h3>
        </div>
    )
}

export default HeaderOption;