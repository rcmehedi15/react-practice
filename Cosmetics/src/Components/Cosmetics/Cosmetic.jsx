import React from 'react';
import Cosmetics from './Cosmetics.css';
const Cosmetic = (props) => {
    const {_id,name,gender,age,email,company,phone} = props.cosmetic;
    return (
        
           <div className='gridItem'>
                <div className='personStyle'>
                    <h2 >ID {_id}</h2>
                    <h2>Name: {name}</h2>
                    <h2>Gender: {gender}</h2>
                    <h2>Age: {age}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Company: {company}</h2>
                    <h2>Phone: {phone}</h2>  
                </div>
                <div className='personStyle'>
                    <h2 >ID {_id}</h2>
                    <h2>Name: {name}</h2>
                    <h2>Gender: {gender}</h2>
                    <h2>Age: {age}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Company: {company}</h2>
                    <h2>Phone: {phone}</h2>  
                </div>
                <div className='personStyle'>
                    <h2 >ID {_id}</h2>
                    <h2>Name: {name}</h2>
                    <h2>Gender: {gender}</h2>
                    <h2>Age: {age}</h2>
                    <h2>Email: {email}</h2>
                    <h2>Company: {company}</h2>
                    <h2>Phone: {phone}</h2>  
                </div>
           </div>
    );
};

export default Cosmetic;