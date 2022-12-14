import React from 'react';
import {FaRegCircle,FaPen,FaTimes} from 'react-icons/fa';

const Icon = function({name}){
    switch(name){
        case 'circle':
            return <FaRegCircle className="icon"/>
        
        default:
            return <FaPen className="icon"/>
                
        case 'cross':
            return <FaTimes className="icon"/>
    }
}

export default Icon;