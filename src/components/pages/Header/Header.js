import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../assets/ui_icons/logo.png';
import Content from '../content/Content';

function Header() {
    const [inputValue, setInputValue] = useState('');
    var [showCart, setShowCart] = useState('false');
    const [receivedData, setReceivedData] = useState('');


    const showCartItems = () => {
        setShowCart("true")
    }

    const handleInputChange = (value) => {
        setInputValue(value.target.value);
    };

    const handleDataReceived = (data) => {
        setReceivedData(data);
        console.log(receivedData);
    };
    return (
        <div>
            <div className="container" id="maindiv">
                <div className="row">
                    <div className="col-lg-4" id="logo">
                        <img src={logo}></img>
                    </div>
                    <div className="col-lg-8" id="navLinks">
                        <div id="searchDiv">
                            <input type="text" placeholder="Search..." onChange={handleInputChange} /><FontAwesomeIcon id="searchIcon" icon="search" />
                        </div>
                        <div id="cartDiv">
                            <FontAwesomeIcon onClick={showCartItems} icon="shopping-cart" /><span>{receivedData}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Content name={inputValue} cart={showCart} onDataReceived={handleDataReceived} />
        </div>


    );
}
export default Header;