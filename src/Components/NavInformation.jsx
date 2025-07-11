import React from 'react';
import Nav from 'react-bootstrap/Nav';
import'../style/nav.css';


const NavInformation = () => {
    return (
        <div className='Nav-Complete'>

            <span>
                <i className="bi bi-laptop"></i>
            </span>


            <Nav className='NavInformation'>
                <Nav.Item>
                    <Nav.Link style={{color:'white'}}  >01.About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color:'white'}}  >02.Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color:'white'}}  >03.Contact</Nav.Link>
                </Nav.Item>
            </Nav>

           
        </div>
    );
};

export default NavInformation;