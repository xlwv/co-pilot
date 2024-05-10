import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const UserCard = ({ imageSrc, pname, ptitle, prating, onChatClick }) => {
     

     const handleChatClick = () => {
        onChatClick(pname);  
        
    };
    console.log("Received pname prop:", pname);
    



    return (
        <div className='img-data'>
            <div className='image-div'>
                <Image fluid src={imageSrc} rounded style={{ borderRadius: '30px' }} className='user-photo' />
                <span className='rank'>#01</span>
            </div>
            <div className='person-detail'>
                <div className='name-title'>
                    <span className='person-name'>{pname}</span>
                    <span className='person-title'>{ptitle}</span>
                </div>
                <div className='rating-chat'>
                    <div className='stars'>{prating}</div>
                    <Button className='chat-btn chat-btn1' onClick={handleChatClick}>CHAT</Button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;