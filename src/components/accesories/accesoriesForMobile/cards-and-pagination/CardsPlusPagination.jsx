import React, { useState } from 'react';
import Cards from './Cards';
import Products from './JsonData.json';
import Pagination from './Pagination';


function CardsPlusPagination() {

    const [cardsPerPage, setCardsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    
    // Get current posts
    const indexOfLastPost = currentPage * cardsPerPage;
    const indexOfFirstPost = indexOfLastPost - cardsPerPage;
    const currentCards = Products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <Cards cards={currentCards} />
            <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={Products.length}
                paginate={paginate}
            />
        </div>
    )
}

export default CardsPlusPagination;
