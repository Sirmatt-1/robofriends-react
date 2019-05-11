import React from 'react';

export default ({ searchChange }) => (
    <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search for friends'
            onChange={searchChange}
        />
    </div>
);
