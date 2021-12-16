import React from 'react';
import './pagination.css';

function Pagination({ cardsPerPage, totalCards, paginate }) {
    
    const pagenumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++){
        pagenumbers.push(i);
    }
    return (
        <div className='mx-auto my-auto pagination rounded pt-2 pb-2' style={{width:"100%", minWidth:"fit-content"}}>
            <div className='mx-auto'>
                {pagenumbers.map(number => {
               return <span className='paginationSpan'><button className='rounded' onClick={()=>paginate(number)}>{number}</button></span>
            })}
            </div>
        </div>
    )
}

export default Pagination;
