import React from 'react';

const Error = () => {
    return (
        <div style={
            {transform: 'translateY(-50%) translateX(-50%)',
            position:'absolute',
            left: '50%',
            top: '50%',
            fontSize:'5rem',
            color:'red'
          }}>
            error
        </div>
    );
}

export default Error;
