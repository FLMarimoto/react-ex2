import React from 'react';

const validationComponent = (props) => {
    let message = (
        <h3>Text too short</h3>
    );
    
    if(props.text>4) { 
        message = (
            <h3>Text long enough</h3>
        );
    }

    return(
        <div>
            {message}
        </div>
    );
}

export default validationComponent;