import React from "react";
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react'

function Content(props) {
    const [data, setData] = useState([]);
    const [cartArray, setcartArray] = useState([]);
    const [receivedData, setReceivedData] = useState('');
    var filteredData
    var finalFilterArray = []
    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addtoCart = (data) => {
        setcartArray(oldArray => [...oldArray, data]);

        props.onDataReceived(cartArray.length);
    }

    if (data.length !== 0 && props.name.length >= 1) {
        filteredData = data.products.filter(item => item.price < props.name);
    }
    else if (props.cart == 'true') {
        finalFilterArray = data.products.filter(element => cartArray.includes(element));
        filteredData = finalFilterArray;
    } else {
        filteredData = data.products;
    }



    return (
        <div className="container">
            <div className="row">
                <div id="itemsDiv">
                    {data.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                            {filteredData.map(item => (
                                <li key={item.id}>
                                    {item.images.map((image, index) => index === 0 && (
                                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                                    ))}

                                    <div id="productDetails">
                                        <div>
                                            <p>Price :{item.price}</p>
                                            <p>Name :{item.title}</p>
                                        </div>

                                        <div id="icnsDiv">
                                            <FontAwesomeIcon onClick={() => addtoCart(item)} style={{ margin: '0px 10px 0px 0px', cursor: 'pointer' }} icon="shopping-cart" />
                                            {/* <FontAwesomeIcon icon="shopping-cart" /> */}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {/* <div>
                    <button onClick={sendDataToHeader}>Send Data to Header</button>
                </div> */}
            </div>
        </div>
    );
}


export default Content;