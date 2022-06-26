import React, { useState } from 'react';
import quotes from './quotes.json'


const Quotes = ( { quote, color}) => {

  
    return (
        <div className='Card_quote'>
            <p style={{color : color}}>{quote.quote}</p>
        </div>
    );
};

export default Quotes;