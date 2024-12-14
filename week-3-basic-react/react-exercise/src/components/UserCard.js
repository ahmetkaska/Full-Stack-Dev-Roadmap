import React from 'react'
import '../css-components/usercard.css';

const UserCard = (props) => {
    const {id, name, surname, age = 25, number, mail} = props; // destructing, default props value, 
    return (
        <div className='card-container'>
                <p>id : {id}</p>
                <h5>fullname : {name} {surname}</h5>
                <p>age : {age}</p>
                <p>number : {number}</p>
                <p>mail : {mail}</p>
        </div>
    )
}

export default UserCard;
