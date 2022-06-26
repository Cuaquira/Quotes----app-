import React from 'react';

const Author = ( {quote, changeCita, color}) => {

    return (
        <div className='Author'>
            <h2 style={{color : color}}> {quote.author}</h2>
            <button onClick={changeCita}
            style={{background : color}}> 
                <i class="fa-solid fa-forward"></i>
            </button>
        </div>
    );
};

export default Author;