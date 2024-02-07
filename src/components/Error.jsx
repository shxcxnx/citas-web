import React from 'react';

const Error = ({ children }) => {
    return (
        <div>
            <div className='bg-red-800 w-full text-white text-center p-3 rounded-md uppercase font-bold mb-3'>
                <p>{children}</p>
            </div>
        </div>
    );
};

export default Error;
