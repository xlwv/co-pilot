import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import { Col, Image, Button } from 'react-bootstrap';

const CardData = ({ imageSrc, rank, pname, ptitle, prating, onChatClick, }) => {
    return (
       
            <div className='img-data'>
                <div className='image-div'>
                    <Image fluid src={imageSrc} rounded style={{ borderRadius: '30px' }} className='user-photo' />
                    <span className='rank'>
                        {rank}
                    </span>
                </div>
                <div className='person-detail'>
                    <div className='name-title'>
                        <span className='person-name'>{pname}</span>
                        <span className='person-title'>{ptitle}</span>
                    </div>
                    <div className='rating-chat'>
                        <div className='stars'>{prating}</div>
                        <button className='chat-btn chat-btn1 ' onClick={() => onChatClick(pname)}>CHAT</button>
                    </div>
                </div>
            </div>
       
    );
}

export default CardData;
