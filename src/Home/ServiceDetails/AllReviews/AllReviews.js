import React from 'react';


const AllReviews = ({review}) => {
    const {serviceName, customer,email, photoURL, reviews} = review;
    
    
    return (
        <div>
            <h2>all reviews:{reviews}</h2>
        </div>
    );
};

export default AllReviews;