import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { IoAdd } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Avatar from '../assets/images/Avatar.png';

import check from '../assets/images/check.png';


import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useCookies } from '../hooks/useCookies';

function SuccessfullModal(props) {
  return (

    <Modal

      {...props}
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        backgroundColor: "#000000B2"
      }}

    >



      <Modal.Body className='profile-modal'>

        {/* <button type="button" className="btn-close " onClick={props.onHide}  style={{ backgroundColor: '#FFFFFF' }} >
        </button> */}


        <div className='success-main'>
          <div className=' profile-close'>
            <button type="button" className="btn-close" onClick={props.onHide} style={{ color: '#FFFFFF', padding: '10px' }} >
            </button>
          </div>
          <div className='success-content'>
            <Image  src={check}></Image>
            <span className='success-txt'>Document Uploaded Successfully</span>
          </div>
        </div>


      </Modal.Body>

    </Modal>

  );
}



export const Profile = () => {

  const navigate = useNavigate();
  // const [selectedFile, setSelectedFile] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const { getCookie ,deleteAllCookies} = useCookies();
  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = () => {
  
  //   if (selectedFile) {
  //     console.log('Uploading file:', selectedFile);
     
  //   } else {
  //     console.log('No file selected');
  //   }
  // };
const ProfileURL = getCookie("picture")
console.log(ProfileURL);
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = '/dashboard';
  };

  const logouthere=()=>{
    deleteAllCookies();
    navigate('/')
  }



  return (
    <>



      <div className='profile-main'>

        <div className='profile-side-bar'>
          <Button className='profile-side-bar-add'>
            <IoAdd style={{ width: '50px', height: '50px', color: '#FFFFFF' }} />
          </Button>
          <AiFillHome className='profile-home-icon' />
          <IoPerson className='profile-profile-icon' />
          {/* <IoSettingsSharp className='profile-settings-icon' /> */}

        </div>
        <Container fluid className='profile-content'>
          <div className='profile-nav-bar'>
            <div className='profile-btn'>
              <Button href="#" className='profile-all-avatar' onClick={handleSubmit}>All Avatar</Button>
              <Button href="#" className='profile-profile'>profile</Button>
            </div>
            <div className='search-login'>
              {/* <div type="text" className='profile-search-bar'><CiSearch className='profile-search-icon' />start searching Avatar here ...</div> */}
              <Button  className='profile-logout' onClick={logouthere}>Logout</Button>
            </div>
          </div>
          <div className='user-information'>
            <div className='blue'>
              <Container fluid className='person-photo'>
                <Image fluid src={ProfileURL ? ProfileURL : Avatar} className='person-pic'></Image>
                {/* <Button className='pic-edit'>Edit</Button> */}
              </Container>
              <span className='your-profile'>Your Profile</span>
            </div>

            <div className='img-doc'>

              <div className='upload'>
                <span className='line'>Upload Training Document</span>
                <div className='res' >
                  <input type="file" className='pdf-file' accept=".pdf" />
                  <Button fluid onClick={() => setModalShow(true)} className='train-doc' >Upload</Button>
                </div>
              </div>
            </div>

          </div>


        </Container>

      </div>

      <SuccessfullModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>




  );
}