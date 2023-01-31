import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widgets() {
    const newArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecord />
            </div>
            <div className='widgets__articleRight'>
                <h4>{ heading }</h4>
                <p>{ subtitle }</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <Info />
            </div>

            {newArticle("Elon Musk invest in Cars", "Top News - 9.234 readers")}
            {newArticle("Bill Gates is in Mexico", "Top News - 8.230 readers")}
            {newArticle("Bitcoin drops to 19K", "Top News - 12.143 readers")}
            {newArticle("Mark Zuckerberg wants to invest in LinkedIn", "Top News - 10.754 readers")}
        </div>
    )
}

export default Widgets;