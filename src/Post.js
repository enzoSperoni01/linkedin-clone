import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <Avatar />
            <div className='post__info'>
                
            </div>
        </div>
    )
}

export default Post