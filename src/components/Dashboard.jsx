import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { IoAdd } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import bot from '../assets/images/bot.png';
import p1 from '../assets/images/p1.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';



function MyVerticallyCenteredModal(props) {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'Bot', message: 'Hi, please clarify few things about the design.' },
        { sender: 'Bot', message: 'Yes sure.' }
    ]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    
    const sendMessage = async () => {
        try {
            
            const response = await axios.post('/api/sendMessage', { message });

           
            setChatHistory([...chatHistory, { sender: 'User', message }]);
            setChatHistory([...chatHistory, { sender: 'Bot', message: response.data }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        
        setMessage('');
    };

    return (
        <Modal className='custom_modal'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <button type="button" className="btn-close" onClick={props.onHide} style={{ backgroundColor: '#FFFFFF' }}></button>
                <div className="chat_msg_cont">
                    <div className="chat_prof_head">
                        <h3>Balbir Singh</h3>
                    </div>
                    <div className="chat-body">
                        <div className="chat-inner">
                            <div id="history">
                                {chatHistory.map((chat, index) => (
                                    <div key={index} className={`chat-mss ${chat.sender === 'User' ? 'rply-mss' : 'user-mss'}`}>
                                        <ul>
                                            <li>
                                                <span><img src={bot} alt="" /></span>
                                                <p>{chat.message}</p>
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="chat_footer">
                        <div className="chat-foot" id="chat_footer_box">
                            <div className="att_plane">
                                <label htmlFor="BannerUpload" className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                        <path d="M1.82865 10.4857L7.48551 4.82888C8.65708 3.6573 10.5566 3.6573 11.7281 4.82888C12.8997 6.00045 12.8997 7.89994 11.7281 9.07152L5.01063 15.789C4.42485 16.3748 3.4751 16.3748 2.88931 15.789C2.30352 15.2032 2.30352 14.2535 2.88931 13.6677L8.89972 7.6573C9.09498 7.46204 9.09498 7.14546 8.89972 6.9502C8.70446 6.75493 8.38787 6.75493 8.19261 6.9502L2.1822 12.9606C1.20589 13.9369 1.20589 15.5198 2.1822 16.4961C3.15852 17.4724 4.74143 17.4724 5.71774 16.4961L12.4353 9.77862C13.9974 8.21653 13.9974 5.68387 12.4353 4.12177C10.8732 2.55967 8.3405 2.55967 6.7784 4.12177L1.12154 9.77862C0.926282 9.97388 0.926282 10.2905 1.12154 10.4857C1.31681 10.681 1.63339 10.681 1.82865 10.4857Z" fill="white"></path>
                                    </svg>
                                    <input type="file" id="BannerUpload" />
                                </label>
                            </div>
                            <div className="chat-box">
                                <form name="chatform" id="send-message" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                                    <textarea rows="1" type="text" placeholder="Ask me anything" className="msg_int_style" id="message" value={message} onChange={handleMessageChange} style={{ color: 'white' }}></textarea>
                                </form>
                            </div>
                            <div className="sent-btn-emoji">
                                <ul>
                                    <li>
                                        <a onClick={sendMessage}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34" fill="none">
                                                <g clip-path="url(#clip0_15840_4181)">
                                                    <path d="M26.0433 16.9706C26.043 16.8278 26.0078 16.688 25.9417 16.5678C25.8756 16.4475 25.7815 16.3517 25.6703 16.2917L12.0229 8.86712C11.9039 8.80467 11.7713 8.78591 11.6429 8.81335C11.5145 8.84078 11.3963 8.91311 11.304 9.02073C11.2117 9.12834 11.1496 9.26615 11.1261 9.41585C11.1026 9.56555 11.1186 9.72005 11.1722 9.85884L13.5196 16.2334L19.297 16.2228L19.297 17.7183L13.5014 17.7183L11.1586 24.0982C11.1076 24.2362 11.0934 24.3888 11.1177 24.5363C11.1421 24.6838 11.2038 24.8194 11.295 24.9255C11.3889 25.0305 11.5078 25.0999 11.6361 25.1245C11.7644 25.1491 11.8961 25.1278 12.0138 25.0634L25.6612 17.6388C25.7727 17.5811 25.8678 17.4876 25.9355 17.3693C26.0031 17.251 26.0405 17.1127 26.0433 16.9706Z" fill="white" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}



export const Dashboard = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <div className='dashboard-main'>

                <div className='side-bar'>
                    <Button className='side-bar-add'>
                        <IoAdd style={{ width: '50px', height: '50px', color: '#FFFFFF' }} />
                    </Button>
                    <AiFillHome className='home-icon' />
                    <IoPerson className='profile-icon' />
                    <IoSettingsSharp className='settings-icon' />

                </div>
                <Container fluid className='dashboard-content'>
                    <div className='nav-bar'>
                        <div className='dash-btn'>
                            <Button href="#" className='all-avatar'>All Avatar</Button>
                            <Button href="#" className='profile'>profile</Button>
                        </div>
                        <div type="text" className='search-bar'><CiSearch className='search-icon' />start searching Avatar here ...</div>
                    </div>
                    <Container fluid className='domain-content'>

                        <div className='user-data'>
                            <span className='user-name'>
                                Hi Anirban Chatterjee
                            </span>
                            <span className='user-title'>
                                Data scientist
                            </span>

                        </div>




                        <Row className="dash-row">
                            {/* First Row */}


                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Rupam Bhattacharjee</span>
                                            <span className='person-title'>CEO</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn' onClick={() => setModalShow(true)}>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Balbir Singh</span>
                                            <span className='person-title'>Web Developer</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Akshayaa Easwaran</span>
                                            <span className='person-title'>UI/UX Designer</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Varsha</span>
                                            <span className='person-title'>UI/UX Designer</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* Second Row */}
                        <Row className='dash-row'>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Prabhat Ranjan Kumar</span>
                                            <span className='person-title'>Web Developer</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Rudrakshi Ghosh</span>
                                            <span className='person-title'>Project coordinator</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Monica</span>
                                            <span className='person-title'>Marketing</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className="dash-column">
                                <div className='img-data'>

                                    <div className='image-div'>  <Image fluid src={p1} rounded style={{ borderRadius: '30px', }} /><span className='rank'>#01</span></div>

                                    <div className='person-detail'>
                                        <div className='name-title'>
                                            <span className='person-name'>Anil</span>
                                            <span className='person-title'>dotnet developer</span>
                                        </div>
                                        <div className='rating-chat'>
                                            <div className='stars'>⭐⭐⭐⭐⭐</div>
                                            <Button className='chat-btn'>CHAT WITH ME</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>



                    </Container>








                </Container>




            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    );
}