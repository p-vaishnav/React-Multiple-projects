import React from 'react';

function Button({title}){
    return(
        <div>
            <button className="button">{title}</button>
        </div>
    );
}

export default Button;