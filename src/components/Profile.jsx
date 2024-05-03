import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { IoAdd } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import Image from 'react-bootstrap/Image';
import person from '../assets/images/p2.png';

import check from '../assets/images/check.png';


import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal className='custom_modal'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <button type="button" className="btn-close" onClick={props.onHide} >
        </button>
       <div className='success-main'>
       <Image src={check}></Image>
       <span className='success-txt'>Document Uploaded Successfully</span>
       </div>


        </Modal.Body>
      
      </Modal>
      
    );
  }

























export const Profile = () => {

    
        const [selectedFile, setSelectedFile] = useState(null);
        const [modalShow, setModalShow] = React.useState(false);
        const handleFileChange = (event) => {
          setSelectedFile(event.target.files[0]);
        };
      
        const handleUpload = () => {
          // Here you can implement the logic to upload the selected file
          if (selectedFile) {
            console.log('Uploading file:', selectedFile);
            // You can send the selected file to your server using fetch or any other method
          } else {
            console.log('No file selected');
          }
        };
        const handleSubmit = (event) => {
            event.preventDefault(); 
            window.location.href = '/dashboard';
    
           
          };
    



    return (
        <>



            <div className='profile-main'>

                <div className='profile-side-bar'>
                    <Button className='profile-side-bar-add'>
                        <IoAdd style={{ width: '50px', height: '50px', color: '#FFFFFF' }} />
                    </Button>
                    <AiFillHome className='profile-home-icon' />
                    <IoPerson className='profile-profile-icon' />
                    <IoSettingsSharp className='profile-settings-icon' />

                </div>
                <Container fluid className='profile-content'>
                    <div className='profile-nav-bar'>
                        <div className='profile-btn'>
                            <Button href="#" className='profile-all-avatar' onClick={handleSubmit}>All Avatar</Button>
                            <Button href="#" className='profile-profile'>profile</Button>
                        </div>
                        <div type="text" className='profile-search-bar'><CiSearch className='profile-search-icon' />start searching Avatar here ...</div>
                    </div>
                    <div className='user-information'>
                        <div className='blue'>
                      
                            <span className='your-profile'>Your Profile</span>
                            <div className='photo'>
                               
                               </div>
                        </div>
                        <div className='img-doc'>
                            {/* <div className='photo'>
                               
                            </div> */}
                            <div className='upload'>
                                    <span className='l1'>Upload Training Document</span>
                                    <div className='res' >
                                    <input type="file" accept=".pdf"   style={{  }}/>
                                    <button onClick={() => setModalShow(true)} className='train-doc' >Upload</button>
                                    </div>
                                </div>
                        </div>

                    </div>


                </Container>

            </div>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>




    );
}