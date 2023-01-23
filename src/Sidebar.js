import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = topic => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{ topic }</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img 
                    src="https://images.unsplash.com/photo-1674390166369-a9e91cc8197c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Background" 
                />
                <Avatar className='sidebar__avatar'/>
                <h2>Enzo Speroni</h2>
                <h4>speronienzo20@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2.022</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>1.812</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {
                    recentItem('reactjs')
                }
                {
                    recentItem('javascript')
                }
                {
                    recentItem('software')
                }
            </div>
        </div>
    )
}

export default Sidebar