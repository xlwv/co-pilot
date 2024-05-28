import React from 'react';
import { useState, useEffect } from 'react';
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
import user from '../assets/images/user.png';
import blueuser from '../assets/images/blueuser.png';
import send from '../assets/images/send.png';
import { useCookies } from '../hooks/useCookies';


import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';
import g1 from '../assets/images/g1.png';
import g2 from '../assets/images/g2.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import CardData from './Card';



function MyVerticallyCenteredModal({ pname, ...props }) {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'Bot', message: `Hi am co pilot, ask me anything. ` }

    ]);
    console.log(pname);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };



    const sendMessage = async () => {

        try {
            const headers = { "session-id": sessionStorage.getItem("sessionId") };


            setChatHistory([...chatHistory, { sender: 'User', message }]);
            const response = await axios.post(`https://copilot.waysaheadglobal.com/api/${pname}`, { user_input: message }, { headers });


            console.log(response);

            setChatHistory([...chatHistory, { sender: "User", message }, { sender: "Bot", message: response.data.response }])

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

            style={{

                // backgroundColor: '#001A23E5'
            }}



        >
            <Modal.Body
                style={{
                    border: '3px solid #00B0f0',
                    borderRadius: '30px ',
                    background: '#001A23E5',
                }}

            >
                <button className="btn-close" onClick={props.onHide} style={{ backgroundColor: '#FFFFFF' }}></button>
                <div className="chat_msg_cont">
                    <div className="chat_prof_head">
                        <h3>{pname}</h3>
                    </div>
                    <div className="chat-body">
                        <div className="chat-inner">
                            <div id="history">
                                {chatHistory.map((chat, index) => (
                                    <div key={index} className={`chat-mss ${chat.sender === 'User' ? 'rply-mss' : 'user-mss'}`}>
                                        <ul>
                                            <li>
                                                <span><img src={chat.sender === 'User' ? user : bot} alt="" /></span>

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
                                {/* <label htmlFor="BannerUpload" className="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                        <path d="M1.82865 10.4857L7.48551 4.82888C8.65708 3.6573 10.5566 3.6573 11.7281 4.82888C12.8997 6.00045 12.8997 7.89994 11.7281 9.07152L5.01063 15.789C4.42485 16.3748 3.4751 16.3748 2.88931 15.789C2.30352 15.2032 2.30352 14.2535 2.88931 13.6677L8.89972 7.6573C9.09498 7.46204 9.09498 7.14546 8.89972 6.9502C8.70446 6.75493 8.38787 6.75493 8.19261 6.9502L2.1822 12.9606C1.20589 13.9369 1.20589 15.5198 2.1822 16.4961C3.15852 17.4724 4.74143 17.4724 5.71774 16.4961L12.4353 9.77862C13.9974 8.21653 13.9974 5.68387 12.4353 4.12177C10.8732 2.55967 8.3405 2.55967 6.7784 4.12177L1.12154 9.77862C0.926282 9.97388 0.926282 10.2905 1.12154 10.4857C1.31681 10.681 1.63339 10.681 1.82865 10.4857Z" fill="white"></path>
                                    </svg>
                                    <input type="file" id="BannerUpload" />
                                </label> */}
                                <img src={blueuser} className='chat-user'></img>

                            </div>
                            <div className="chat-box">
                                <form name="chatform" id="send-message" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                                    <input type="text" placeholder="Ask me anything!" className="msg_int_style" id="message" value={message} onChange={handleMessageChange} style={{ color: '##00B0F0' }}></input>
                                </form>
                            </div>
                            <div className="sent-btn-emoji">


                                <a onClick={sendMessage}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="34" viewBox="0 0 30 34" fill="none">
                                                <g clip-path="url(#clip0_15840_4181)">
                                                    <path d="M26.0433 16.9706C26.043 16.8278 26.0078 16.688 25.9417 16.5678C25.8756 16.4475 25.7815 16.3517 25.6703 16.2917L12.0229 8.86712C11.9039 8.80467 11.7713 8.78591 11.6429 8.81335C11.5145 8.84078 11.3963 8.91311 11.304 9.02073C11.2117 9.12834 11.1496 9.26615 11.1261 9.41585C11.1026 9.56555 11.1186 9.72005 11.1722 9.85884L13.5196 16.2334L19.297 16.2228L19.297 17.7183L13.5014 17.7183L11.1586 24.0982C11.1076 24.2362 11.0934 24.3888 11.1177 24.5363C11.1421 24.6838 11.2038 24.8194 11.295 24.9255C11.3889 25.0305 11.5078 25.0999 11.6361 25.1245C11.7644 25.1491 11.8961 25.1278 12.0138 25.0634L25.6612 17.6388C25.7727 17.5811 25.8678 17.4876 25.9355 17.3693C26.0031 17.251 26.0405 17.1127 26.0433 16.9706Z" fill="white" />
                                                </g>
                                            </svg> */}
                                    <img src={send} className='send-btn'></img>
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

const rowData = [

    {
        imageSrc: p3,
        rank: '#01',
        pname: 'Rupam',
        ptitle: 'CEO',
        prating: "⭐⭐⭐⭐⭐",

    },
    {
        imageSrc: p4,
        rank: '#02',
        pname: 'Vishnu',
        ptitle: 'Data Scientist',
        prating: "⭐⭐⭐⭐⭐",


    },
    {
        imageSrc: g2,
        rank: '#03',
        pname: 'Akshayaa Easwaran',
        ptitle: 'UI/UX Designer',
        prating: "⭐⭐⭐⭐⭐",

    },
    {
        imageSrc: p4,
        rank: '#04',
        pname: 'Prabhat Ranjan',
        ptitle: 'web Developer',
        prating: "⭐⭐⭐⭐⭐",

    },



    {
        imageSrc: g1,
        rank: '#05',
        pname: 'Varsha',
        ptitle: 'UI/UX Designer',
        prating: "⭐⭐⭐⭐⭐",

    },
    {
        imageSrc: g2,
        rank: '#06',
        pname: 'Monica',
        ptitle: 'Marketing',
        prating: "⭐⭐⭐⭐⭐",

    },
    {
        imageSrc: p1,
        rank: '#07',
        pname: 'Anil',
        ptitle: 'dotnet Developer',
        prating: "⭐⭐⭐⭐⭐",

    },
    {
        imageSrc: g2,
        rank: '#08',
        pname: 'Rudrakshi Goush',
        ptitle: 'Project coordinator',
        prating: "⭐⭐⭐⭐⭐",

    },

];



export const Dashboard = () => {
    // const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();
    const [apiName, setApiName] = useState("");
    // const [selectedKey, setSelectedKey] = useState(null);
    const [modals, setModals] = useState([]);
    const [data, setData] = useState(rowData);
    const [searchTerm, setSearchTerm] = useState("");
    const { getCookie, deleteCookie, deleteAllCookies } = useCookies();


    const Name = getCookie("firstName") + " " + getCookie("lastName");
    const designation = getCookie("designation")
    const ProfileURL = getCookie("picture")
    console.log(Name);
    const handleSearch = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const filteredData = rowData.filter((person) => {
            return person.pname.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setData(filteredData);
    }, [searchTerm]);



    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/Profile';

    };
    const logouthere = () => {
        deleteAllCookies();
        navigate('/')
    }



    useEffect(() => {

        async function generateSessionId() {

            const response = await fetch("https://copilot.waysaheadglobal.com/api/generate_sessionid");
            const data = await response.text();
            sessionStorage.setItem("sessionId", data);
        }
        if (!sessionStorage.getItem("sessionId")) {
            generateSessionId();
        }

    }, [])
    // const handleChatClick = (pname,key) => {

    //     setModalShow(true);

    //     console.log("Clicked person's name:",pname);
    //     setApiName(pname);
    //     setSelectedKey(key);
    //     console.log("Clicked person's key:",key);


    // };

    const handleChatClick = (pname) => {
        const newModal = {
            pname: pname,
            // selectedKey: key,
            show: true
        };
        setModals([...modals, newModal]);
        setApiName(pname);
    };

    const onHideModal = (index) => {
        const updatedModals = [...modals];
        updatedModals.splice(index, 1);
        setModals(updatedModals);
    };

    // Render all modals

    return (
        <>

            <div>
                <div className='dashboard-main'>
                    <div className='side-bar'>
                        <Button className='side-bar-add'>
                            <IoAdd style={{ width: '50px', height: '50px', color: '#FFFFFF' }} />
                        </Button>
                        <AiFillHome className='home-icon' />
                        <IoPerson className='profile-icon' />
                        {/* <IoSettingsSharp className='settings-icon' /> */}

                    </div>
                    <Container fluid className='dashboard-content'>
                        <div className='nav-bar'>

                            <div className='welcometo'>
                                Welcome To Co Pilot
                            </div>
                            <div className='search-logout'>
                                <div type="text" className='search-bar'>
                                    <CiSearch className='search-icon' onChange={handleSearch} />
                                    <input name={searchTerm} value={searchTerm} onChange={handleSearch} className='searchbox' type="text" placeholder='Start searching Avatar here ...' />
                                </div>

                                <div className='profilenamecontianer'>
                                    <div className=''>

                                        <img className="profilearea" width="40px" height="40px" src={ProfileURL} alt="" />
                                    </div>
                                    <div className='namedesignation'>
                                        <p style={{ marginTop: "-7px" }}>{Name}</p>
                                        <p style={{ marginTop: "-10px" }}> {designation}</p>
                                    </div>
                                </div>
                                {/* <Button  className='dash-logout' onClick={logouthere}>Logout</Button> */}
                            </div>
                        </div>
                        <Container fluid className='domain-content'>

                            {/* <div className='user-data'>
                                <span className='user-name'>
                                    Hi {Name}
                                </span>
                                <span className='user-title'>
                                    {designation}
                                </span>

                            </div> */}

                            <Row className="dash-row">
                                {data.map((person, personIndex) => (
                                    <Col lg={3} md={6} sm={6} className="dash-column" key={personIndex}>
                                        <CardData
                                            imageSrc={person.imageSrc}
                                            rank={person.rank}
                                            pname={person.pname}
                                            ptitle={person.ptitle}
                                            prating={person.prating}
                                            onChatClick={() => handleChatClick(person.pname, personIndex)}
                                            key={personIndex}
                                        />
                                    </Col>
                                ))}
                            </Row>

                        </Container>

                    </Container>


                </div>
            </div>


            {/* <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        pname={apiName}
                        selectedKey={selectedKey}
                        /> */}
            {modals.map((modal, index) => (
                <MyVerticallyCenteredModal
                    key={index}
                    show={modal.show}
                    onHide={() => onHideModal(index)}
                    pname={modal.pname}
                    selectedKey={modal.selectedKey}
                    chatHistory={modal.chatHistory}
                />
            ))}


        </>
    );
}